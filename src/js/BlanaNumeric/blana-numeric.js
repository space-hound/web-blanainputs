import _BlanaNumeric from "./_blana-numeric";

export default ( element ) => {
    const comp = new _BlanaNumeric(element);
    comp.Build();
    return comp;
}