
let counter = 0

arr = []
for (i=0;i<100;i++) {
    arr.push(i)
}
index = 0



    setInterval(() => {

        console.log(arr[index]);
        index += 1
    }, 1000);

