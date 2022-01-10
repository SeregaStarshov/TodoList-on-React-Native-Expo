import { FC, useState } from 'react';
import { TextInput, StyleSheet, Pressable } from 'react-native';

interface PropsInput {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	setPressInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input: FC<PropsInput> = ({ value, setValue, setPressInput }) => {
	return (
		<TextInput
			style={styles.input}
			placeholder='Добавить задачу'
			multiline={true}
			onPressIn={() => setPressInput(true)}
			value={value}
			onChangeText={(text) => {
				setValue(text);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: 'white',
		color: 'black',
		borderWidth: 2,
		borderRadius: 30,
		borderColor: '#5040B2',
		flexGrow: 1,
		paddingLeft: 15,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 80,
		fontSize: 18,
		flexWrap: 'wrap',
		maxWidth: '100%',
		position: 'relative',
		marginVertical: 2,
	},
});

export default Input;
