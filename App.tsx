import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import CustomButtonMicro from './components/ButtonMicro';
import ButtonSubmit from './components/ButtonSubmit';
import Input from './components/Input';
import Task from './components/Task';

export default function App() {
	const arrTask: string[] = [];
	const [task, setTask] = useState<string[]>(arrTask);
	const [pressInput, setPressInput] = useState(false);
	const [value, setValue] = useState('');

	const onsubmit = (): void => {
		if (value.trim()) {
			setTask((prev) => [...prev, value]);
			setValue('');
			setPressInput(false);
		}
	};
	return (
		<>
			<View style={styles.container}>
				<StatusBar style='auto' />
				<View style={styles.taskContainer}>
					<Task task={task} />
				</View>
				<View style={styles.inputContainer}>
					<Input value={value} setValue={setValue} setPressInput={setPressInput} />
					<CustomButtonMicro pressInput={pressInput} />
					<ButtonSubmit submit={onsubmit} />
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		color: 'red',
		fontSize: 18,
	},
	inputContainer: {
		flexDirection: 'row',
		width: '100%',
	},
	taskContainer: {
		marginTop: 35,
	},
	scrollView: {
		backgroundColor: 'pink',
		marginHorizontal: 20,
	},
});
