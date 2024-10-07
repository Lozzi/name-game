import { NameGame } from "@/app/components/name-game/name-game"


export default function GuessName() {
    return <div style={{alignSelf: 'start'}}>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <NameGame answer={'NATAN'} />
        </div>
    </div>
}
