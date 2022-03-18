
import { print } from "./putchar";
export function my_print_revalpha_someupper() {

    for (let i=97;i<=122;i++) {
        //print(String.fromCharCode(i)) 

        if (i%2 == 0) {
            print(String.fromCharCode(i-32))
        } 
        else{
            print(String.fromCharCode(i))
        }


    }
    print("\n")
}

my_print_revalpha_someupper()





