import React from 'react'
import Image from 'next/image'
import heart from "../components/logo/heart.png";
type Props = {
	name: string;
	number: number;
	lives: number;
}

const NextPlayers = ({name, number, lives}:Props) => {
	
	const icons = (() => {
		switch (lives) {
			case 3:
				return (
					<>
						<span className='border-2 border-red-300 text-white bg-red-500 rounded-full h-10 w-10'>V</span>
						<Image src={heart} alt="heart" width={30} />
						<Image src={heart} alt="heart" width={30} />
					</>
				);
			case 2:
				return (
					<>
						<Image src={heart} alt="heart" width={30} />
						<Image src={heart} alt="heart" width={30} />
					</>
				);
			case 1:
				return (
					<>
						<Image src={heart} alt="heart" width={30} />
					</>
				);
			default:
				return <>{""}</>;
		}
	})();

	return (
		<div
			className="flex flex-row w-full justify-between text-center text-3xl font-bold playersText"
			id={crypto.randomUUID()}>
			<h4 className="w-[20%]">{number}</h4>
			<h4 className="w-[60%]">{name}</h4>
			<span className="w-[20%] flex justify-center gap-1">
			{icons}
			</span>
		</div>
	);
}

export default NextPlayers