import {
    CardBlock,
    Paragraph,
} from "@digdir/designsystemet-react";

export default function SorterTreff(){
    return (
        <div className="relative flex items-center justify-end mt-10 w-full">

        {/* Treff */}
        <Paragraph className="absolute left-1/2 -translate-x-1/2 text-3xl">
            1243131 treff
        </Paragraph>

        {/* Sorter etter */}
        <div className="flex items-center space-x-3 mr-5">
            <Paragraph className="text-3xl">Sorter etter</Paragraph>
            <CardBlock className="w-[30px] h-[30px] bg-red-500" />
        </div>
        </div>
    )
}