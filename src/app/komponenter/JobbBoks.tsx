import {
  Card,
  CardBlock,
  Heading,
  Paragraph,
} from "@digdir/designsystemet-react";

export default function JobbBoks() {
  return (
    <div className="flex justify-center items-center mt-20">
      <Card
        data-color="neutral"
        className="max-w-[550px] border-2 border-black"
      >
        <div className="flex flex-row">
          {/* Image block */}
          <CardBlock className="w-[300px] h-[120px] bg-red-500 m-auto" />

          {/* Text content */}
          <div className="flex flex-col pl-5">
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
  );
}
