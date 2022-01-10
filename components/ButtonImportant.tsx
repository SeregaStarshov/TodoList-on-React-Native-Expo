import { FC, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ButtonImportant: FC = () => {
	const [important, setImportant] = useState(false);
	const toggle = (): void => {
		important ? setImportant(false) : setImportant(true);
	};
	return (
		<Pressable onPress={() => toggle()} style={styles.important}>
			<AntDesign name='exclamationcircleo' size={24} color={important ? 'green' : 'black'} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	important: {
		position: 'absolute',
		top: 10,
		right: 50,
	},
});

export default ButtonImportant;
