import { Dispatch, SetStateAction, createContext } from "react";

interface HashlistContext {
    hashlist: string;
    setHashlist: Dispatch<SetStateAction<string>>;
}

const HashlistContext = createContext<HashlistContext | null>(null);

export default HashlistContext;