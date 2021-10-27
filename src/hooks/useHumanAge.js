const useHumanAge = () => {
    return (age) => {
        const abs = Math.abs(age) % 100;
        const ageFormat = abs % 10;
        let ago = "лет";
        if(ageFormat > 1 && ageFormat < 5 )  ago = "года";
        if(abs > 10 && abs < 20 ) ago = "лет";
        if(ageFormat === 1 &&  abs > 20) ago = "год"
        return ago;
    }
}

export default useHumanAge;