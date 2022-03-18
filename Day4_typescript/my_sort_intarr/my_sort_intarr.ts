import { print } from "./putchar"
export function my_sort_intarr(array: number[], size: number) {

        for (let i = 1 ; i < array.length ; i++) {
        
            for (let j=i; j>0; j--) {
                if (array[j] < array [j - 1]) {
                    const temp = array [j];
                    array [j]=array [j - 1];
                    array [j - 1] = temp; 
            
                }

                else{
                    break;
                }
                
     
            } 
            
    }

return array;

}

