import React from "react";
import TunedOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TunedOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
              image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo"
              channel="Clever Programmer"
              verified
              subs="662K"
              noOfVideos={383}
              description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
            />
            <hr />

            <VideoRow 
              views="49K"
              subs="662K"
              description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... http://cleverprogrammer.com Enroll in ..."
              timestamp="1 year ago" 
              channel="Clever Programmer"
              title="How long does it take to be a software developer?"
              image="https://i.ytimg.com/vi/VX4Vjw949E0/maxresdefault.jpg" 
            />
            <VideoRow 
              views="3.3K"
              subs="662K"
              description="Do you want to master React JS & learn how to make an income with your new skills? Click here & enroll NOW ..."
              timestamp="5 days ago" 
              channel="Clever Programmer"
              title="How to Use ASYNC Functions in React Hooks Tutorial - (UseEffect + Axios)"
              image="https://i.ytimg.com/vi/lbHuwpPwfoc/maxresdefault.jpg" 
            />
            <VideoRow 
              views="33K"
              subs="662K"
              description="Do you want to beat the zombie apocalypse & become a 6-figure JavaScript developer ? Join the FREE 5-day JS challenge ..."
              timestamp="3 months ago" 
              channel="Clever Programmer"
              title="How Billionaire Developers Think: Decoding the Mind of Billionaire Developers"
              image="https://i.ytimg.com/vi/AorXolPgKlY/maxresdefault.jpg" 
            />
            <VideoRow 
              views="16K"
              subs="662K"
              description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... https://cleverprogrammer.com If you want to ..."
              timestamp="8 months ago" 
              channel="Clever Programmer"
              title="4 Mistakes Programmers Make (Why MOST Programmers Suck)"
              image="https://i.ytimg.com/vi/i1T84mh3iqI/maxresdefault.jpg" 
            />
            <VideoRow 
              views="14K"
              subs="662K"
              description="Let's talk about how to boost your productivity 100x and stop your procrastination once and for all. This is a guide/walkthrough on ..."
              timestamp="2 years ago" 
              channel="Clever Programmer"
              title="How to Stop Procrastinating - Top 4 Ways"
              image="https://i.ytimg.com/vi/g09Bllp7JZ4/maxresdefault.jpg" 
            />
            <VideoRow 
              views="44K"
              subs="662K"
              description="Enroll in Python OOP course ▻ http://cleverprogrammer.to/enroll... Github ▻ https://goo.gl/3c1fCx ENROLL IN CLEVER ..."
              timestamp="3 years ago" 
              channel="Clever Programmer"
              title="Python OOP - 1 - INIT"
              image="https://i.ytimg.com/vi/Gu4edYy4Qpo/maxresdefault.jpg" 
            />
            <VideoRow 
              views="8.8K"
              subs="662K"
              description="This music is fuel for the up & coming developer who wants to make some fucking money and get to 6-figures as fast as possible ..."
              timestamp="1 year ago" 
              channel="Clever Programmer"
              title="Hip Hop / Trap for Programmers | Coding All Day 🔥 - (Clever Programmer)"
              image="https://i.ytimg.com/vi/s-dB1ZLlz-Q/maxresdefault.jpg" 
            />

        </div>
    )
}

export default SearchPage;
