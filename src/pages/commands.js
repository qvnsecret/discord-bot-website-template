import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Commands() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Head>
        <title>Commands | ONbot</title>
        <meta
          name="description"
          content="Commands page | Minimal and awesome discord bot website created with ❤️ using NextJS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              ⚡ Commands
            </label>
          </header>

          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Administration & Setups ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>.addemoji</kbd> -{" "}
                  <span className="p-color">Add an emoji to the server using an image attachment.</span>
                </li>
                <li>
                  <kbd>.ban</kbd> -{" "}
                  <span className="p-color">Bans a member from the server.</span>
                </li>
                <li>
                  <kbd>.clear</kbd> -{" "}
                  <span className="p-color">Cleans messages from a channel.</span>
                </li>
                <li>
                  <kbd>.deleteemoji</kbd> -{" "}
                  <span className="p-color">Remove an emoji from the server by its name or ID.</span>
                </li>
                <li>
                  <kbd>.hide</kbd> -{" "}
                  <span className="p-color">Hides the channel from everyone.</span>
                </li>
                <li>
                  <kbd>.kick</kbd> -{" "}
                  <span className="p-color">Kicks a member.</span>
                </li>
                <li>
                  <kbd>.lock</kbd> -{" "}
                  <span className="p-color">Disables everyone from sending messages in a specific channel.</span>
                </li>
                <li>
                  <kbd>.move</kbd> -{" "}
                  <span className="p-color">Moves a member to another voice channel.</span>
                </li>
                <li>
                  <kbd>.mute</kbd> -{" "}
                  <span className="p-color">Mute a member from text channels so they cannot type.</span>
                </li>
                <li>
                  <kbd>.role-all</kbd> -{" "}
                  <span className="p-color">Add a role to all users who do not already have it.</span>
                </li>
                <li>
                  <kbd>.role</kbd> -{" "}
                  <span className="p-color">Add or remove a role for a user.</span>
                </li>
                <li>
                  <kbd>.setnick</kbd> -{" "}
                  <span className="p-color">Changes the member's nickname.</span>
                </li>
                <li>
                  <kbd>.show</kbd> -{" "}
                  <span className="p-color">Makes the channel visible to everyone.</span>
                </li>
                <li>
                  <kbd>.slowmode</kbd> -{" "}
                  <span className="p-color">Sets the slow mode for the channel.</span>
                </li>
                <li>
                  <kbd>.timeout</kbd> -{" "}
                  <span className="p-color">Gives timeout to a member.</span>
                </li>
                <li>
                  <kbd>.unban</kbd> -{" "}
                  <span className="p-color">Unbans a member from the server.</span>
                </li>
                <li>
                  <kbd>.unlock</kbd> -{" "}
                  <span className="p-color">Allows everyone to send messages in the specified channel.</span>
                </li>
                <li>
                  <kbd>.unmute</kbd> -{" "}
                  <span className="p-color">Unmute a member.</span>
                </li>
                <li>
                  <kbd>.unrole-all</kbd> -{" "}
                  <span className="p-color">Remove a specified role from all users who have it.</span>
                </li>
                <li>
                  <kbd>.unrole</kbd> -{" "}
                  <span className="p-color">Remove a role from a user.</span>
                </li>
                <li>
                  <kbd>.untimeout</kbd> -{" "}
                  <span className="p-color">Removes timeout from a member.</span>
                </li>
                <li>
                  <kbd>.unwarn</kbd> -{" "}
                  <span className="p-color">Removes warnings from a user.</span>
                </li>
                <li>
                  <kbd>.vkick</kbd> -{" "}
                  <span className="p-color">Kicks a member from the voice channel.</span>
                </li>
                <li>
                  <kbd>.vmute</kbd> -{" "}
                  <span className="p-color">Mutes a member from the voice.</span>
                </li>
                <li>
                  <kbd>.vunmute</kbd> -{" "}
                  <span className="p-color">Unmutes a member from the voice.</span>
                </li>
                <li>
                  <kbd>.warn</kbd> -{" "}
                  <span className="p-color">Gives a warning to a user.</span>
                </li>
                <li>
                  <kbd>.warnings</kbd> -{" "}
                  <span className="p-color">Get the list of warnings for the server or a user.</span>
                </li>
                <li>
                  <kbd>.antilink</kbd> -{" "}
                  <span className="p-color">Toggles the anti-link settings for the server. [BUGS]</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Fun 🐛
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>$command1</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command2</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
                <li>
                  <kbd>$command3</kbd> -{" "}
                  <span className="p-color">Description of command</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb3" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb3">
              General & Information 👀
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>.stats</kbd> -{" "}
                  <span className="p-color">Stats of the bot.</span>
                </li>
                <li>
                  <kbd>.help</kbd> -{" "}
                  <span className="p-color">Displays general information about the bot.</span>
                </li>
                <li>
                  <kbd>.invite</kbd> -{" "}
                  <span className="p-color">Invite & Support our bot. You will help us a lot.</span>
                </li>
                <li>
                  <kbd>.ping</kbd> -{" "}
                  <span className="p-color">Test the bot's response time.</span>
                </li>
                <li>
                  <kbd>.banner</kbd> -{" "}
                  <span className="p-color">Sending a target user banner URL</span>
                </li>
                <li>
                  <kbd>.avatar</kbd> -{" "}
                  <span className="p-color">Sending a target user avatar URL.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="cb5" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb5">
              Server Owners & Developers Bot 🖼️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>.embed</kbd> -{" "}
                  <span className="p-color">Send a customizable embed message. [BUGS]</span>
                </li>
                <li>
                  <kbd>.massdm</kbd> -{" "}
                  <span className="p-color">Send a DM to all members of the server.</span>
                </li>
                <li>
                  <kbd>.notify</kbd> -{" "}
                  <span className="p-color">Developers only.</span>
                </li>
                <li>
                  <kbd>.rules</kbd> -{" "}
                  <span className="p-color">Shows rules.</span>
                </li>
                <li>
                  <kbd>.say</kbd> -{" "}
                  <span className="p-color">Sends a message to the target channel.</span>
                </li>
              </ul>
            </div>
          </section>

          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </motion.div>
  );
}
