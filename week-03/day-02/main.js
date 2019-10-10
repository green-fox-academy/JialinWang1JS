addEventListener(string, func){
    let event = {}
    func(event);
}


addEventListener('1', (e) => {console.log(e)})