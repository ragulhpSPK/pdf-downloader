import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
import light from "../logo.svg";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    height: 35,
    width: 35,
  },
});

const PDFFile = () => {
  return (
    <Document style={styles.container}>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          hello
        </Text>
        <Image src={light} />
        <Text>
          Is the Space Pope reptilian!? No! The cat shelter's on to me. I
          videotape every customer that comes in here, so that I may blackmail
          them later. Maybe I love you so much I love you no matter who you are
          pretending to be. These old Doomsday Devices are dangerously unstable.
          I'll rest easier not knowing where they are. Robot 1-X, save my
          friends! And Zoidberg! Leela, Bender, we're going grave robbing. Oh
          Leela! You're the only person I could turn to; you're the only person
          who ever loved me. Yes! In your face, Gandhi! Ah, computer dating.
          It's like pimping, but you rarely have to use the phrase "upside your
          head." Oh Leela! You're the only person I could turn to; you're the
          only person who ever loved me. Oh right. I forgot about the battle.
          Bender?! You stole the atom. We're rescuing ya. I'll get my kit! Stop!
          Don't shoot fire stick in space canoe! Cause explosive decompression!
          That's a popular name today. Little "e", big "B"? Ow, my spirit! Oh,
          all right, I am. But if anything happens to me, tell them I died
          robbing some old man. Ask her how her day was. Your best is an idiot!
          Fry! Stay back! He's too powerful! Dr. Zoidberg, that doesn't make
          sense. But, okay! It's a T. It goes "tuh". File not found. Ah, yes!
          John Quincy Adding Machine. He struck a chord with the voters when he
          pledged not to go on a killing spree. You, a bobsleder!? That I'd like
          to see! Bender, this is Fry's decision… and he made it wrong. So it's
          time for us to interfere in his life. Yeah. Give a little credit to
          our public schools. Oh, you're a dollar naughtier than most. THE BIG
          BRAIN AM WINNING AGAIN! I AM THE GREETEST! NOW I AM LEAVING EARTH, FOR
          NO RAISEN! But, like most politicians, he promised more than he could
          deliver. And yet you haven't said what I told you to say! How can any
          of us trust you? Ok, we'll go deliver this crate like professionals,
          and then we'll go ride the bumper cars. Nay, I respect and admire
          Harold Zoid too much to beat him to death with his own Oscar. Who are
          those horrible orange men? Well, let's just dump it in the sewer and
          say we delivered it. Why am I sticky and naked? Did I miss something
          fun? Guess again. Hey, guess what you're accessories to. I just told
          you! You've killed me! Fry, you can't just sit here in the dark
          listening to classical music. I can explain. It's very valuable. Look,
          last night was a mistake. It's just like the story of the grasshopper
          and the octopus. All year long, the grasshopper kept burying acorns
          for winter, while the octopus mooched off his girlfriend and watched
          TV. But then the winter came, and the grasshopper died, and the
          octopus ate all his acorns. Also he got a race car. Is any of this
          getting through to you? Oh, how I wish I could believe or understand
          that! There's only one reasonable course of action now: kill Flexo! I
          don't know what you did, Fry, but once again, you screwed up! Now all
          the planets are gonna start cracking wise about our mamas. Why yes!
          Thanks for noticing. I can explain. It's very valuable. And until
          then, I can never die? Guards! Bring me the forms I need to fill out
          to have her taken away! Tell them I hate them. Yeah. Give a little
          credit to our public schools. And from now on you're all named Bender
          Jr. I'll tell them you went down prying the wedding ring off his cold,
          dead finger. I can explain. It's very valuable. Fry! Quit doing the
          right thing, you jerk! Why am I sticky and naked? Did I miss something
          fun? Why did you bring us here? A sexy mistake. Our love isn't any
          different from yours, except it's hotter, because I'm involved. Now
          that the, uh, garbage ball is in space, Doctor, perhaps you can help
          me with my sexual inhibitions? Ah, the 'Breakfast Club' soundtrack! I
          can't wait til I'm old enough to feel ways about stuff! We're rescuing
          ya. Bender, quit destroying the universe! Man, I'm sore all over. I
          feel like I just went ten rounds with mighty Thor. Bender! Ship! Stop
          bickering or I'm going to come back there and change your opinions
          manually!
        </Text>
      </Page>
    </Document>
  );
};

export default PDFFile;
