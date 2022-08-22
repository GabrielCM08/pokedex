import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoriteContext";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;
  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };
  const heart = favoritePokemons.includes(pokemon.name) ? "💙" : "🖤";

  const normalBackground = require("../images/types/background/normal.jpg");
  const fightingBackground = require("../images/types/background/fight.jpg");
  const flyingBackground = require("../images/types/background/fly.jpg");
  const poisonBackground = require("../images/types/background/poison.jpg");
  const groundBackground = require("../images/types/background/ground.jpg");
  const rockBackground = require("../images/types/background/rock.jpg");
  const bugBackground = require("../images/types/background/bug.jpg");
  const ghostBackground = require("../images/types/background/ghost.jpg");
  const steelBackground = require("../images/types/background/steel.jpg");
  const fireBackground = require("../images/types/background/fire.jpg");
  const waterBackground = require("../images/types/background/water.jpg");
  const grassBackground = require("../images/types/background/grass.jpg");
  const electricBackground = require("../images/types/background/electric.jpg");
  const psychicBackground = require("../images/types/background/psychic.jpg");
  const iceBackground = require("../images/types/background/ice.jpg");
  const dragonBackground = require("../images/types/background/dragon.jpg");
  const darkBackground = require("../images/types/background/dark.jpg");
  const fairyBackground = require("../images/types/background/fairy.jpg");

  const normalText = require("../images/types/text/NormalIC_RSE.jpg");
  const fireText = require("../images/types/text/FireIC_RSE.jpg");
  const waterText = require("../images/types/text/WaterIC_RSE.jpg");
  const grassText = require("../images/types/text/GrassIC_RSE.jpg");
  const electricText = require("../images/types/text/ElectricIC_RSE.jpg");
  const iceText = require("../images/types/text/IceIC_RSE.jpg");
  const fightingText = require("../images/types/text/FightingIC_RSE.jpg");
  const poisonText = require("../images/types/text/PoisonIC_RSE.jpg");
  const groundText = require("../images/types/text/GroundIC_RSE.jpg");
  const flyingText = require("../images/types/text/FlyingIC_RSE.jpg");
  const psychicText = require("../images/types/text/PsychicIC_RSE.jpg");
  const bugText = require("../images/types/text/BugIC_RSE.jpg");
  const rockText = require("../images/types/text/RockIC_RSE.jpg");
  const ghostText = require("../images/types/text/GhostIC_RSE.jpg");
  const darkText = require("../images/types/text/DarkIC_RSE.jpg");
  const dragonText = require("../images/types/text/DragonIC_RSE.jpg");
  const steelText = require("../images/types/text/SteelIC_RSE.jpg");
  const fairyText = require("../images/types/text/FairyIC_RSE.jpg");

  pokemon.types.map((type) => {
    if (type.type.name === "normal") {
      type.type.name = normalText;
    } else if (type.type.name === "fire") {
      type.type.name = fireText;
    } else if (type.type.name === "water") {
      type.type.name = waterText;
    } else if (type.type.name === "grass") {
      type.type.name = grassText;
    } else if (type.type.name === "electric") {
      type.type.name = electricText;
    } else if (type.type.name === "ice") {
      type.type.name = iceText;
    } else if (type.type.name === "fighting") {
      type.type.name = fightingText;
    } else if (type.type.name === "poison") {
      type.type.name = poisonText;
    } else if (type.type.name === "ground") {
      type.type.name = groundText;
    } else if (type.type.name === "flying") {
      type.type.name = flyingText;
    } else if (type.type.name === "psychic") {
      type.type.name = psychicText;
    } else if (type.type.name === "bug") {
      type.type.name = bugText;
    } else if (type.type.name === "rock") {
      type.type.name = rockText;
    } else if (type.type.name === "ghost") {
      type.type.name = ghostText;
    } else if (type.type.name === "dark") {
      type.type.name = darkText;
    } else if (type.type.name === "dragon") {
      type.type.name = dragonText;
    } else if (type.type.name === "steel") {
      type.type.name = steelText;
    } else if (type.type.name === "fairy") {
      type.type.name = fairyText;
    }
  });

  let pokeBG;
  let getType = pokemon.types[0].type.url;

  if (getType === "https://pokeapi.co/api/v2/type/1/") {
    pokeBG = normalBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/2/") {
    pokeBG = fightingBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/3/") {
    pokeBG = flyingBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/4/") {
    pokeBG = poisonBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/5/") {
    pokeBG = groundBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/6/") {
    pokeBG = rockBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/7/") {
    pokeBG = bugBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/8/") {
    pokeBG = ghostBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/9/") {
    pokeBG = steelBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/10/") {
    pokeBG = fireBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/11/") {
    pokeBG = waterBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/12/") {
    pokeBG = grassBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/13/") {
    pokeBG = electricBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/14/") {
    pokeBG = psychicBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/15/") {
    pokeBG = iceBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/16/") {
    pokeBG = dragonBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/17/") {
    pokeBG = darkBackground;
  } else if (getType === "https://pokeapi.co/api/v2/type/18/") {
    pokeBG = fairyBackground;
  }

  return (
    <div className="pokemon-card" style={{ backgroundImage: `url(${pokeBG})` }}>
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  <img alt={type.type.name} src={type.type.name}></img>
                </div>
              );
            })}
          </div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
