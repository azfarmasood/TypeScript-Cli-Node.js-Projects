export function TOTAL_WORDS_COUNTERS(Text: string) {
    const TotalwordsCounts = Text.trim();
    if (TotalwordsCounts === "") {
      return "0";
    }
    const wordsCounts = TotalwordsCounts.split(" ");
    const WORDSCOUNTS = wordsCounts.filter(word => word !== "");
    return `${WORDSCOUNTS.length}`;
  }
  
  export function TOTAL_CHARACTER_COUNTERS(Text: string) {
    return `${Text.length}`;
  };
  
  export function TOTAL_NUMBER_COUNTERS(Text: string) {
    let count: number = 0;
    for (const Number_Counts of Text) {
      if (Number_Counts >= '0' && Number_Counts <= '999999999') {
        count++;
      }
    }
    return `${count}`;
  };
  
  export function TOTAL_LETTER_COUNTERS(Text: string) {
    let count: number = 0;
    for (let Alphabets_Counters of Text) {
      if (Alphabets_Counters >= "a" && Alphabets_Counters <= "z" || Alphabets_Counters >= "A" && Alphabets_Counters <= "Z") {
        count++;
      }
    }
    return `${count}`;
  };
  
  export const TOTAL_UNIQUE_WORDS_COUNTERS = (Text: string) => {
    const UniqueWords = Text.split("").filter(Paragraphs_OR_Words => Paragraphs_OR_Words.trim() !== "");
    const Unique_Words_Counter = new Set(UniqueWords);
    return `${Unique_Words_Counter.size}`;
  }
  
  export function TOTAL_UNIQUE_LETTER_COUNTERS(Text: string) {
    const UniqueAlphabets = new Set();
    for (const Unique_Alphabets_Counters of Text) {
      if (Unique_Alphabets_Counters >= "a" && Unique_Alphabets_Counters >= "z" || Unique_Alphabets_Counters >= "A" && Unique_Alphabets_Counters <= "Z") {
        UniqueAlphabets.add(Unique_Alphabets_Counters);
      }
    };
    return `${UniqueAlphabets.size}`;
  }

 export function TOTAL_SERIAL_NUMBER(counter:number) {
    return `${counter}`.padStart(2,"0");
  }