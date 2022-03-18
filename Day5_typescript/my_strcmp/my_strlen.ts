export function my_strlen(str: string) { 

    let len = 0 //on appelle une variable avec valeur 0 car on ne sait pas cb de caractère il y a

    while(str[len]){
        len ++
    }
return len;
}

