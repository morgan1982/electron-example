let randomNum = () => {

    let array = [];
    let num = 2500;
    for (let i=0;i<=20;i++) {
        array.push(num);
        num += 20;
        
    }
    
    
    function shuffle(array) {
      var tmp, current, top = array.length;
      if(top) while(--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
      return array;
    }
    
    a = shuffle(array);
    // console.log(a.length);

    // setInterval(() => {
    //     index = Math.floor(Math.random() * (a.length - 1) )
    //     genNum = a[index];
    //     console.log(genNum)

    // }, 500);
    index = Math.floor(Math.random() * (a.length - 1) )
    genNum = a[index];


    return genNum;

}
randomNum();

module.exports = {
    randomNum
};





