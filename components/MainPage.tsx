import { View, StyleSheet, Text } from 'react-native';
import { FC } from 'react';

interface PropsMainPage {
	title: string;
	isOpen: boolean;
}

const MainPage: FC<PropsMainPage> = (props) => {
	return (
		<View style={styles(props.isOpen).container}>
			<Text style={styles(props.isOpen).text}>{props.title}</Text>
		</View>
	);
};

const styles = (props: unknown) =>
	StyleSheet.create({
		container: {
			backgroundColor: 'white',
			display: props ? 'flex' : 'none',
		},
		text: {
			color: 'black',
		},
	});

export default MainPage;
