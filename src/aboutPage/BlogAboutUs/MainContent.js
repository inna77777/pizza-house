import React from "react";
import { useParams } from "react-router-dom";
import Interior from "../../images/gallery-2-631x587.jpg";

const MainContent = () => {
  const { section } = useParams();
  let content;
  switch (section) {
    case "our-mission":
      content = (
        <div>
          <h2>OFFERING THE BEST PIZZA IN LOS ANGELES</h2>
          <p>
            Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu,
            barbatus mens! Cum elogium favere, omnes lubaes tractare talis,
            barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas
            sunt accentors de germanus cacula. Amicitias prarere in alta muta!
            Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte
            consumere de audax, festus indictio. Nunquam quaestio scutum.
            Valebats
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img
            src={Interior}
            alt="interior"
            className="img-fluid w-100"
            style={{ height: "27em" }}
          />
        </div>
      );
      break;
    case "our-goals":
      content = (
        <div>
          <h2>PROVIDING TOP-NOTCH CUSTOMER SERVICE</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur.
          </p>
          <p>
            Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu,
            barbatus mens! Cum elogium favere, omnes lubaes tractare talis,
            barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas
            sunt accentors de germanus cacula. Amicitias prarere in alta muta!
            Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte
            consumere de audax, festus indictio. Nunquam quaestio scutum.
            Valebats
          </p>
          <img
            src={Interior}
            alt="interior"
            className="img-fluid w-100"
            style={{ height: "27em" }}
          />
        </div>
      );
      break;
    case "our-values":
      content = (
        <div>
          <h2>INTEGRITY & DEDICATION</h2>
          <p>
            Albus, dexter particulas grauiter consumere de ferox, bi-color
            abactus. Impositios studere, tanquam mirabilis hippotoxota. Cur
            torus manducare? Pol, vox! Cum barcas nocere, omnes specieses
            contactus
          </p>
          <p>
            Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu,
            barbatus mens! Cum elogium favere, omnes lubaes tractare talis,
            barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas
            sunt accentors de germanus cacula. Amicitias prarere in alta muta!
            Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte
            consumere de audax, festus indictio. Nunquam quaestio scutum.
            Valebats
          </p>
          <img
            src={Interior}
            alt="interior"
            className="img-fluid w-100"
            style={{ height: "27em" }}
          />
        </div>
      );
      break;
    default:
      content = (
        <div>
          <h2>A FEW WORDS ABOUT US</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur
          </p>
          <img
            src={Interior}
            alt="interior"
            className="img-fluid w-100"
            style={{ height: "27em" }}
          />
        </div>
      );
      break;
  }
  return <div>{content}</div>;
};
export default MainContent;
