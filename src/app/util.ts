export function keytoLabel(key:string){
    switch (key) {
        case "situation":
            return "状況"
        case "feeling":
            return "気分"
        case "distortion":
            return "自動思考"
        case "evidence":
            return "根拠"
        case "disproof":
            return "反証"
        case "restructuring":
            return "適応的思考"
        case "change":
            return "心の変化"
        case "createdAt":
            return "投稿日時"
        default:
            return "不明なキー"
    }
}