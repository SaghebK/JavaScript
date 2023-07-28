class Add {
  constructor(...words) {
      this.words = words;
  }
  print() {
    let s="";
  for (let i of this.words){
      s= s+'$'+i;
  }
  console.log(s+'$');
 }
}

var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
var y = new Add("this", "is", "awesome");
var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
x.print();
y.print();
z.print();
