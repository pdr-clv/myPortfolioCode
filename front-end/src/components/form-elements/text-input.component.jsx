import React from 'react';

import { 
	GroupContainer,
	TextInputContainer,
	TextLabel,
} from './text-input-area.styles';

const TextInput = ({handleChange, label, ...otherProps}) =>(
	<GroupContainer>
		<TextInputContainer
			onChange={handleChange}
			{...otherProps}
		/>
		{
//si se añade el atributo label, entonces se renderiza un label, si no se le pasa atributo, no se renderiza nada.
			label ?
			(
//en cuanto se escribe algo en el input, se detecta un value.length superior a 1, se sube el texto con la propiedad shrink			
//className={`${otherProps.value.length ? 'shrink':''} form-input-label`}
			<TextLabel className={`${otherProps.value.length ? 'shrink':''}`}>
				{label}
			</TextLabel>)
			:null

		}
	</GroupContainer>
);

export default TextInput;