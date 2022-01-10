import React, { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface PropsButtonSubmit {
	// value: string;
	// setTask: React.Dispatch<React.SetStateAction<string[]>>;
	// setValue: React.Dispatch<React.SetStateAction<string>>;
	submit: () => void;
}

const ButtonSubmit: FC<PropsButtonSubmit> = (props) => {
	return (
		<Pressable
			onPress={() =>
				// props.setTask((prev) => {
				// 	return [...prev, props.value];
				// })
				props.submit()
			}
			style={styles.bntSubmit}
		>
			<FontAwesome name='send' size={24} color='#5040B2' />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	bntSubmit: {
		position: 'absolute',
		paddingHorizontal: 15,
		paddingTop: 10,
		paddingBottom: 10,
		bottom: 3,
		right: 0,
	},
});

export default ButtonSubmit;
