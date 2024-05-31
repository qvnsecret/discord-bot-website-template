import Link from "next/link";
import Image from "next/image";
import botOnlineStatus from "../utils/images/botStatus.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="/">
                  ONbot
                </Link>
                <span
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  className="p-color"
                >
                  <Image
                    src={botOnlineStatus}
                    width={20}
                    height={20}
                    alt="online-status"
                    className="onlineStatus"
                  />{" "}
                  Bot is online!
                </span>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="/commands">
                  Commands
                </Link>
              </li>
              <li>
                <Link className="p-color" href="https://discord.com/oauth2/authorize?client_id=1223343717184835754">
                  Support
                </Link>
              </li>
              <li>
                <Link className="p-color" href="https://discord.gg/uzsBkB9wm4">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Created with ❤️ by{" "}
              <Link
                href="https://discord.gg/uzsBkB9wm4"
                className="h-color no-decoration"
              >
                qvnrvx
              </Link>
            </p>
            <p className="p-color">{year} &copy; All rights reserved!</p>
          </div>
          <div className="footer-sec2-link">
            <Link className="p-color no-decoration" href="https://www.gofundme.com/f/onbot?utm_source=copy_link&utm_medium=customer&utm_campaign=man_sharesheet_ft&attribution_id=sl:771ffe83-8e1b-4217-bfb4-f0a9f04fc08c">
              Donation
            </Link>
            <Link className="p-color no-decoration" href="/privacy">
              Privacy
            </Link>
            <Link className="p-color no-decoration" href="/tos">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
