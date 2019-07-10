import _BlanaInterval from "./_blana-interval";

export default ( element ) => {
    let comp = new _BlanaInterval(element);
    comp.Build();

    return comp;
}