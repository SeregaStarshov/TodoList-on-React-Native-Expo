import { Pressable, StyleSheet } from 'react-native';
import { FC } from 'react';
import { SimpleLineIcons } from '@expo/vector-icons';

interface PropsButton {
	pressInput: boolean;
}

const CustomButtonMicro: FC<PropsButton> = ({ pressInput }) => {
	return (
		<Pressable style={pressInput ? styles.btnHide : styles.btn} onPress={() => console.log('click')}>
			<SimpleLineIcons name='microphone' size={24} color='#5040B2' />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	btn: {
		backgroundColor: 'transparent',
		paddingHorizontal: 15,
		paddingTop: 10,
		paddingBottom: 10,
		position: 'absolute',
		bottom: 3,
		right: 35,
	},
	btnHide: {
		display: 'none',
	},
});

export default CustomButtonMicro;
