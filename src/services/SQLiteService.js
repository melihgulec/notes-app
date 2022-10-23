import SQLite from 'react-native-sqlite-storage';
import WebSQLite from 'websqlite';

const SQLiteManager = new WebSQLite();

export default class SQLiteService {
  /**
   *
   */
  init() {
    SQLiteManager.init({
      id: 'example',
      dbObject: SQLite,
    });

    this.createTables();
  }

  async createTables() {
    console.log('creatTables');
    this.createTable('notes', [
      {
        name: 'id',
        dataType: 'integer',
        isNotNull: true,
        options: 'PRIMARY KEY AUTOINCREMENT',
      },
      {
        name: 'title',
        dataType: 'text',
      },
      {
        name: 'description',
        dataType: 'text',
      },
      {
        name: 'date',
        dataType: 'date',
      },
      {
        name: 'favorite',
        dataType: 'integer',
      },
    ]);

    this.createTable('categories', [
      {
        name: 'id',
        dataType: 'integer',
        isNotNull: true,
        options: 'PRIMARY KEY AUTOINCREMENT',
      },
      {
        name: 'description',
        dataType: 'text',
      },
    ]);
  }

  /**
   *
   * @param {*} tableName
   * @param {*} columns
   * @param {*} where
   */
  async select(tableName, columns, where) {
    if (where) {
      var whereKey = Object.keys(where)[0];
      var whereValue = where[whereKey];
      return await SQLiteManager.select(
        tableName,
        columns || columns === '' ? '*' : columns,
        whereKey + ' = ?',
        [whereValue],
      );
    } else {
      return await SQLiteManager.select(
        tableName,
        columns || columns === '' ? '*' : columns,
      );
    }
  }

  /**
   *
   * @param {*} tableName
   * @param {*} data
   */
  insert(tableName, data) {
    var keys = Object.keys(data);
    var values = keys.map(key => data[key]);
    SQLiteManager.insert(tableName, keys, values);
  }

  /**
   *
   * @param {*} tableName
   * @param {*} data
   * @param {*} where
   */
  update(tableName, data, where) {
    var keys = Object.keys(data);
    var values = keys.map(key => data[key]);

    var whereKey = Object.keys(where)[0];
    var whereValue = where[whereKey];

    SQLiteManager.update(tableName, keys, values, whereKey + ' = ?', [
      whereValue,
    ]);
  }

  /**
   *
   * @param {*} tableName
   * @param {*} where
   */
  delete(tableName, where) {
    var whereKey = Object.keys(where)[0];
    var whereValue = where[whereKey];

    SQLiteManager.delete(tableName, whereKey + ' = ?', [whereValue]);
  }

  /**
   *
   * @param {*} query
   */
  executeSQL(query) {
    SQLiteManager.query(query);
  }

  /**
   *
   * @param {*} tableName
   * @param {*} columns
   */
  createTable(tableName, columns) {
    var query = '';
    for (var i = 0; i < columns.length; i++) {
      if (i === columns.length - 1) {
        query +=
          '"' +
          columns[i].name +
          '" ' +
          columns[i].dataType +
          ' ' +
          (columns[i].isNotNull ? 'NOT NULL ' : '') +
          columns[i].options;
      } else {
        query +=
          '"' +
          columns[i].name +
          '" ' +
          columns[i].dataType +
          ' ' +
          (columns[i].isNotNull ? 'NOT NULL ' : '') +
          columns[i].options +
          ',';
      }
    }
    this.executeSQL(
      'CREATE TABLE IF NOT EXISTS ' + tableName + ' (' + query + ')',
    );
  }
}
