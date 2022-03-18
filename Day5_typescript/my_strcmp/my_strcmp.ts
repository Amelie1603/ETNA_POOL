function my_strlen(str: string) { 

    let len = 0 

    while(str[len]){
        len ++
    }
return len;
}

export function my_strncmp(first: string, second: string, lenght:number) {
    
    
    let i = 0           
       
while (((first&&second)[i]), i <= lenght)  {
         
        
        
        
           if (first.charCodeAt(i) != (second.charCodeAt(i))) { 
            
                                                                   
            return ((first.charCodeAt(i)) - (second.charCodeAt(i))) 
         } 
         
    i ++
       
    }     

    if  (my_strlen(first) > i) {             
        return (first.charCodeAt(i))
    } else if (my_strlen(second) > i ) {       
        return (second.charCodeAt(i) * -1)    
    } else {
        return 0 
        
    }
        
    
}

console.log(my_strncmp("Hello","Hello",2)); 
