import { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface PropsBtnRemove {
	setRemoveTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonRemove: FC<PropsBtnRemove> = ({ setRemoveTask }) => {
	return (
		<Pressable
			onPress={() => {
				setRemoveTask(true);
				console.log('remove');
			}}
			style={styles.remove}
		>
			<AntDesign name='closecircleo' size={24} color='red' />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	remove: {
		position: 'absolute',
		right: 15,
		top: 10,
	},
});

export default ButtonRemove;
