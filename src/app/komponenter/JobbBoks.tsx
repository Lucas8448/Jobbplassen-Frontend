import {
    Paragraph,
    Card,
    CardBlock,
    Heading,
    
} from "@digdir/designsystemet-react";



export default function JobbBoks(){
    return (
        <div className="flex justify-center items-center pt-24 ">
        <Card data-color="neutral" className="max-w-[550px] border-2 border-black">
        <div className="flex flex-row">
            {/* Bildeblokk */}
            <CardBlock className="w-[250px] h-[120px] bg-red-500 m-auto" />

            {/* Tekstinnhold */}
            <div className="flex flex-col pl-5 ">
            <Heading>Card</Heading>
            <Paragraph>
                Most provide as with carried business are much better more the
                perfected designer. Writing slightly explain desk unable at
                supposedly about this
            </Paragraph>
            <Paragraph>Footer text</Paragraph>
            </div>
        </div>
        </Card>
        </div>
    )
}
