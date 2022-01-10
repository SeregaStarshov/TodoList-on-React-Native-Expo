import React, { FC, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonComplete from './ButtonComplete';
import ButtonImportant from './ButtonImportant';
import ButtonRemove from './ButtonRemove';

interface PropsTask {
	task: string[];
}

const Task: FC<PropsTask> = (props) => {
	const arrayTask = props.task;
	const [currentStateTask, setCompleteTask] = useState(false);
	const [removedTask, setRemoveTask] = useState(false);
	return (
		<>
			{arrayTask
				? arrayTask.map((item, index) => (
						<View key={index} style={styles.task}>
							<Text style={styles.textTask}>{item}</Text>
							<ButtonComplete currentStateTask={currentStateTask} setComplete={setCompleteTask} />
							<ButtonRemove setRemoveTask={setRemoveTask} />
							<ButtonImportant />
						</View>
				  ))
				: null}
		</>
	);
};

const styles = StyleSheet.create({
	task: {
		shadowColor: '0px 0px 20px rgba(188, 79, 255, 0.7)',
		marginVertical: 3,
		backgroundColor: 'white',
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: '#5040B2',
		borderRadius: 30,
		position: 'relative',
	},
	textTask: {
		color: 'black',
		width: '100%',
		fontSize: 18,
		paddingRight: 80,
	},
});

export default Task;
