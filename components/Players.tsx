import React from "react";
import Player from "./Player";

interface Props {
  players: PlayerProps[];
  nextPlayers: PlayerProps[];
}

interface PlayerProps {
  id: string;
  name: string;
  startNumber: number;
  lives: number;
}

const Players = ({ players, nextPlayers }: Props) => {
  return (
    <section className="flex flex-col justify-between w-full h-[60%] text-2xl font-semibold">
      <h2 className="text-center bg-gradient-to-r from-[#11193a] to-[#36457a] font-bold text-white py-1">
        Aréna:
      </h2>

      {Object.values(players).map((player: any) => (
        <Player
          key={player.id}
          name={player.name}
          number={player.startNumber}
          lives={player.lives}
        />
      ))}

      <h2 className="text-center bg-gradient-to-r from-[#11193a] to-[#36457a] font-bold text-white py-1">
        Připraví se:
      </h2>
      {Object.values(nextPlayers).map((nextPlayer: any) => (
        <Player
          key={nextPlayer.id}
          name={nextPlayer.name}
          number={nextPlayer.startNumber}
          lives={nextPlayer.lives}
        />
      ))}
    </section>
  );
};

export default Players;
