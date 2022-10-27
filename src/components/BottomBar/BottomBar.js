import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './BottomBar.style';
import SQLiteService from '../../services/SQLiteService';
import CustomAlert from '../../components/CustomDialog/CustomDialog';

var service = new SQLiteService();

const BottomBar = ({note, navigation, fetchNotes}) => {
  const [favorite, setFavorite] = useState(note.favorite);
  const [showPopup, setShowPopup] = useState(false);

  const deleteButton = () => {
    service.delete('notes', {
      id: note.id,
    });

    fetchNotes();
    navigation.pop();
  };

  const favoriteButton = () => {
    const selectFav = favorite => {
      setFavorite(favorite);

      service.update(
        'notes',
        {
          favorite: favorite,
        },
        {
          id: note.id,
        },
      );
    };

    if (favorite === 1) {
      selectFav(0);
    } else {
      selectFav(1);
    }

    fetchNotes();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.item} android_ripple>
        <Icon name={'share-social-outline'} size={18} style={styles.icon} />
        <Text style={styles.text}>Paylaş</Text>
      </Pressable>
      <Pressable
        style={styles.item}
        onPress={() => setShowPopup(true)}
        android_ripple>
        <Icon name={'trash-bin-outline'} size={18} style={styles.icon} />
        <Text style={styles.text}>Sil</Text>
      </Pressable>
      <Pressable style={styles.item} android_ripple onPress={favoriteButton}>
        <Icon
          name={favorite === 1 ? 'heart-sharp' : 'heart-outline'}
          size={18}
          style={styles.icon}
        />
        <Text style={styles.text}>Favoriler</Text>
      </Pressable>
      <CustomAlert
        iconName={'warning-outline'}
        title={'Uyarı'}
        subtitle={'Not sonsuza kadar silinecektir. Onaylıyor musunuz?'}
        visibility={showPopup}
        dismissAlert={setShowPopup}
        onOkPress={deleteButton}
      />
    </View>
  );
};

export default BottomBar;
