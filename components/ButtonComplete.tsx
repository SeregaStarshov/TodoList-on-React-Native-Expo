import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Pressable, StyleSheet, Button } from 'react-native';

interface PropsBtnComplete {
	currentStateTask: boolean;
	setComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonComplete: FC<PropsBtnComplete> = ({ currentStateTask, setComplete }) => {
	const toggle = (): void => {
		currentStateTask ? setComplete(false) : setComplete(true);
	};
	return (
		<Pressable onPress={() => toggle()} style={styles.complete}>
			<AntDesign name='checkcircleo' size={24} color={currentStateTask ? 'green' : 'black'} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	complete: {
		position: 'absolute',
		right: 90,
		top: 10,
	},
});

export default ButtonComplete;
