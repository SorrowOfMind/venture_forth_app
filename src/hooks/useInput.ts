import React, {useState} from 'react';


const useInput = (initialValue: string) => {
   const [value, setValue] = useState(initialValue);
   
   return [
        value,
        {
            value,
            onChange: (e: React.FormEvent) => setValue((e.target as HTMLInputElement).value)
        }
   ];
}

export default useInput;