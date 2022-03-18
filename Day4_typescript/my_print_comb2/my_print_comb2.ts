import { print } from "./putchar"
export function my_print_comb2(){

    for (let i = 0 ; i <= 98 ; i ++) {
          
        for (let j=i+1 ; j <= 99 ; j ++) {

       
            
        if (!(i==0 && j==1)) {
            print(" ")
        }
            
            print(i/10)
            print(i%10)
            print("  ")
            print(j/10)
            print(j%10)
            if (!(i== 98 && j==99)) {
                 print(",")
            }
            
        }

    }

    print("\n")
}

