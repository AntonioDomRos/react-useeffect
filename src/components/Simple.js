import { useEffect, useState } from 'react';

const Simple = () => {
	const [message, setMessage] = useState('');
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('Hola');
	});

	return (
		<div>
			<h2>Ejemplo</h2>
			<p>{message}</p>
			<input
				type="text"
				onChange={(event) => {
					setMessage(event.target.value);
				}}
			/>
			<h2>Contador</h2>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>Click aqui</button>
		</div>
	);
};

export default Simple;
