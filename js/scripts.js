var text = (new String("Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."));
var dinosaur = (new String("triceratops"));
var dinosaurUpperCased = dinosaur.toUpperCase();
var dinosaurReplaced = text.replace("Velociraptor", dinosaurUpperCased);
var textHalfLength = dinosaurReplaced.length/2;
var textHalfDivided = dinosaurReplaced.slice(0, textHalfLength);
console.log(textHalfDivided);