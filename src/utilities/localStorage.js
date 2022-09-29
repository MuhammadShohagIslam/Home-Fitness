const addToBreakTimeLocalStorage = (breakTime) => {
    let storeBreakTime = {};

    if (!breakTime) {
        console.log("outside");
        const existsBreakTime = localStorage.getItem("breakTime");
        storeBreakTime =
            existsBreakTime === null ? 0 : JSON.parse(existsBreakTime);
    } else {
        console.log("inside", breakTime);
        localStorage.setItem("breakTime", JSON.stringify(breakTime));
    }

    return storeBreakTime;
};

export { addToBreakTimeLocalStorage };
