import Svg, { Path, Defs, Pattern, Use, Image,G } from "react-native-svg"

export default Svgs = ({title}) =>{
  console.log(title)
    if(title === 'Menu'){
        return <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={17}
        viewBox="0 0 25 17"
        fill="none"
      >
        <Path
          d="M1.599 8.333H13.5M1.6 1h22m-22 14.667h22"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    }
    else if(title ==='shopping-cart'){
        return  <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G
          opacity={0.3}
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <Path d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </G>
      </Svg>
    }
    else if(title === 'Search') {
        return <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M19 19l-4.35-4.35M17 9A8 8 0 111 9a8 8 0 0116 0z"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    }
    else if (title === 'ActiveHome') {
      return  <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.596.554a1.55 1.55 0 00-2.192 0L.554 11.404a1.55 1.55 0 002.192 2.192l.454-.454V23.35a1.55 1.55 0 001.55 1.55h3.1a1.55 1.55 0 001.55-1.55v-3.1a1.55 1.55 0 011.55-1.55h3.1a1.55 1.55 0 011.55 1.55v3.1a1.55 1.55 0 001.55 1.55h3.1a1.55 1.55 0 001.55-1.55V13.142l.454.454a1.55 1.55 0 002.192-2.192L13.596.554z"
        fill="#FA4A0C"
      />
    </Svg>
    }
    else if (title === 'Star'){
      return <Svg
      width={30}
      height={28}
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        opacity={0.3}
        d="M15 1.618l2.892 8.901.112.346h9.723l-7.572 5.501-.294.213.113.346 2.892 8.901-7.572-5.501-.294-.213-.294.213-7.572 5.501 2.893-8.901.112-.346-.294-.213-7.572-5.501H11.996l.112-.346L15 1.618z"
        fill="#fff"
        stroke="#000"
      />
    </Svg>
    }
    else if(title === 'Shtrix'){
      return  <Svg
      width={40}
      height={22}
      viewBox="0 0 40 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <Path
        opacity={0.3}
        fill="url(#pattern0)"
        stroke="#000"
        d="M0.5 0.5H39.5V21.5H0.5z"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_1526_240"
            transform="matrix(.00195 0 0 .00355 0 -.41)"
          />
        </Pattern>
        <Image
          id="image0_1526_240"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA3aAAAN2gFLGPbrAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAEJQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhihLswAAABV0Uk5TAAUGCxEWGxwgISg8SF5weZCbtrjYjtqLCgAAA55JREFUeNrt1FFPglAYgGFBHAL9/9/ZWrOMhG7CtnP26WFqF/U8V+3jg8Ps1c0GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4rKrPRoflUpdOfix3zW/Xj6j333+cjvFrdOlkHMPlbZvulExyu106+fgMl9ttOjme7rzTVeml92nF++R39fHkrBnCANohDmBYEcB+WZ7iANrsNcbncLnr0p2SSW7IAmhewuWnOgv79c47QxX+L0reJ79ruDA5n/5PfukICEAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACEAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACEAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACAABIAAEgAB4qCa+NM3xteXSVHDEXLCcnzUXPHBeM7nwnJJDp+r68o07U33T++R3zQXPqfpsdPC1+LN6HwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPy6L03NV0bW8W9jAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
    }
    else if (title === 'User'){
      return <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
        stroke="#ADADAF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    }
}