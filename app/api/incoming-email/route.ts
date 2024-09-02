import OpenAI from "openai";


export default function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) {

     
      res.status(200).json({ message: 'Solicitud recibida con éxito' });


  }