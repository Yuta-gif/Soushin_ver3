import { useState } from 'react'; // ★これを忘れずに
import Confetti from 'react-confetti'; // ★紙吹雪ライブラリをインポート
function App() {
  const [isPressed, setIsPressed] = useState(false);

  const [q1, setQ1] = useState(null); // 問1用
  const [q2, setQ2] = useState(null); // 問2用
  const [q3, setQ3] = useState(null); // 問3用

  // ★ 2. 選択された時の「ピンク色スタイル」を定義（コピペ用）
  const activeStyle = {
    backgroundColor: "pink",
    color: "white",
    borderColor: "pink"
  };


  return (
<div>
<p
    className="my-styled-text">
    PR:医療法人社団　宇良々舎
  </p>
  <img loading="lazy" decoding="async" loading="lazy" decoding="async" alt="FV" className="FV" src="FV/FV.png" />
  <video
    autoPlay
    loop
    muted
    playsInline
    src="instagram/instagram_c2_smaller.mp4"
    width="100%"
  />
  <p className="chusyaku">※効果には個人差があります※当社指定の信販会社をご利用した分割料金</p>
  <p className="chusyaku">
    ※他キャンペーンとの併用不可※申し込みページ内に適用条件記載
  </p>
  <p className="chusyaku">※画像はイメージです</p>
  <br />
  <p className="normal-text">
    <span
      style={{
        backgroundColor: "transparent",
        color: "black",
      }}>
      ※
    </span>
    <span
      style={{
        color: "rgb(230, 0, 0)",
      }}>
      👆医療ダイエットの一例
    </span>
  </p>
  <br />
  
  <p className="normal-text">下記アンケートに回答して</p>
  <br />
  <p className="so-small-text" style={{marginBottom:"auto",color:"grey"}}>
    \先着5名限定！/
    <span
      style={{
        fontSize: "8px",
      }}>
      ※
    </span>
  </p>
  <p className="normal-text" style={{marginTop:"auto"}}>
    <span
      className="highlighing-yellow"
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "24px",
      }}>
      15か月分0円の超お得モニター
      <span
        style={{
          fontSize: "8px",
        }}>
        ※
      </span>
    </span>
    <span
      style={{
        backgroundColor: "transparent",
        color: "black",
      }}>
      を
    </span>

  </p>
  <p className="normal-text">
    <span className="normal-text zoom-text">GETしちゃってください！</span>
  </p>
  <br />
  <p className="chusyaku" >※全医院1日あたり</p>
  <p className="chusyaku">
    ※当社指定の信販会社をご利用した分割料金※他キャンペーンとの併用不可
  </p>
  <p className="chusyaku">※申し込みページ内に適用条件を記載しております</p>
  <br />
  <img loading="lazy" decoding="async" className="FV" src="iryoudaietto200manenbun.jpg" />
  <p className="so-small-text">30秒で終わるアンケートはこちら👇</p>
  <br />
  <br />



  <div className="App">
      {/* --- 問1 --- */}
      <img loading="lazy" decoding="async" className="FV" src="q1.png" />
      <br />
      <div className="shifting-button">
        {/* onClickで番号(1)を保存。 styleの中で「q1が1ならピンク」という条件を入れる */}
        <button 
          className="pushingbutton" 
          onClick={() => setQ1(1)} 
          style={{fontSize:"20px", fontWeight:"900", ...(q1 === 1 ? activeStyle : {})}}
        >
          毎日走らないといけないのがツラい..
        </button>

        <button 
          className="pushingbutton" 
          onClick={() => setQ1(2)} 
          style={{fontSize:"20px", fontWeight:"900", ...(q1 === 2 ? activeStyle : {})}}
        >
          好きなものが食べれないのがツラい..
        </button>

        <button 
          className="pushingbutton" 
          onClick={() => setQ1(3)} 
          style={{fontSize:"20px", fontWeight:"900", ...(q1 === 3 ? activeStyle : {})}}
        >
          全然痩せないのがツラい..
        </button>

        <button 
          className="pushingbutton" 
          onClick={() => setQ1(4)} 
          style={{fontSize:"20px", fontWeight:"900", ...(q1 === 4 ? activeStyle : {})}}
        >
          リバウンドするのがツラい..
        </button>
      </div>
      
      <br />

      {/* --- 問2 --- */}
      <img loading="lazy" decoding="async" className="FV" src="q2.png" />
      <div className="shifting-button">
        <button 
          className="pushingbutton2" 
          onClick={() => setQ2(1)}
          style={{fontSize:"20px", fontWeight:"900", ...(q2 === 1 ? activeStyle : {})}}
        >
          脂肪冷却 <br /><span style={{fontSize:"15px", fontWeight:"700"}}>1回で脂肪細胞-20%</span>
        </button>

        <button 
          className="pushingbutton2" 
          onClick={() => setQ2(2)}
          style={{fontSize:"20px", fontWeight:"900", ...(q2 === 2 ? activeStyle : {})}}
        >
          GLP-1 <br /><span style={{fontSize:"15px", fontWeight:"700"}}>食べても太りにくい体質に変化へ！</span>
        </button>

        <button 
          className="pushingbutton2" 
          onClick={() => setQ2(3)}
          style={{fontSize:"20px", fontWeight:"900", ...(q2 === 3 ? activeStyle : {})}}
        >
          全顔美顔EMS <br /><span style={{fontSize:"15px", fontWeight:"700"}}>モデルのような小顔も目指せちゃう！</span>
        </button>

        <button 
          className="pushingbutton2" 
          onClick={() => setQ2(4)}
          style={{fontSize:"20px", fontWeight:"900", ...(q2 === 4 ? activeStyle : {})}}
        >
          個別ダイエットコンサル<br /><span style={{fontSize:"15px", fontWeight:"700"}}>骨格に合わせたオーダーメイドダイエット</span>
        </button>
      </div>

      <br />

      {/* --- 問3 --- */}
      <img loading="lazy" decoding="async" className="FV" src="q3.png" />
      <div className="shifting-button">
        <button 
          className="pushingbutton3" 
          onClick={() => setQ3(1)}
          style={{fontSize:"20px", fontWeight:"900", ...(q3 === 1 ? activeStyle : {})}}
        >
          水着を堂々と着たい！
        </button>

        <button 
          className="pushingbutton3" 
          onClick={() => setQ3(2)}
          style={{fontSize:"20px", fontWeight:"900", ...(q3 === 2 ? activeStyle : {})}}
        >
          照明つけて彼氏とイチャイチャ！💚
        </button>

        <button 
          className="pushingbutton3" 
          onClick={() => setQ3(3)}
          style={{fontSize:"20px", fontWeight:"900", ...(q3 === 3 ? activeStyle : {})}}
        >
          好きな人にアプローチしたい！
        </button>

        <button 
          className="pushingbutton3" 
          onClick={() => setQ3(4)}
          style={{fontSize:"20px", fontWeight:"900", ...(q3 === 4 ? activeStyle : {})}}
        >
          好きなものを好きなだけ食べたい！
        </button>
      </div>
    </div>
    <br /><br />


  
    <button
    id="startBtn"
    className="anquiet-button"
    onClick={() => setIsPressed(true)} // クリックしたら「押された状態」にする
    disabled={isPressed} // 連打防止
    style={{
      fontSize: "20px",
      fontWeight: "900",
      /* ▼▼▼ ここからアニメーションの設定 ▼▼▼ */
      backgroundColor: isPressed ? "#ff3399" : "white", // 押すとピンクに塗りつぶし
      color: isPressed ? "white" : "#fc57c8",           // 文字は白く
      border: isPressed ? "3px solid #ff3399" : "solid 3px #e457fc",
      transform: isPressed ? "scale(0.95)" : "scale(1)", // グッと押し込まれる動き
      transition: "all 0.2s ease",                       // ふわっと動かす
      cursor: isPressed ? "default" : "pointer"
      /* ▲▲▲ ここまで ▲▲▲ */
    }}
  >
    {/* 押されたら文字を変える */}
    {isPressed ? "回答済み" : "回答する"}
  </button>  <br /><br />

  <div className='normal-text'>
  <p>ご回答ありがとうございました！</p>
    <br />
    <p className="highlighing-yellow">回答者特典</p>
    <span>として</span>
    <p>
      15か月分0円
      <span
        style={{
          fontSize: "10px",
        }}>
        ※
      </span>
      の
    </p>
    <p
      className="highlighing-yellow"
      style={{
        color: "rgb(230, 0, 0)",
      }}>
      超お得ダイエットモニター特典
    </p>
    <span>を</span>
    <p>下の画像をタップして</p>
    <p>お受け取りください！</p>
    <p className="chusyaku">
      ※当社指定の信販会社をご利用した分割料金※他キャンペーンとの併用不可
    </p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しております</p>
    <br />
    <a href="https://freestyle-ts.com/link.php?i=pi8doylelazb&m=mi8dp1646fow">
    <video
      autoPlay
      loop
      muted
      playsInline
      src="monitakengenpurezento\monitakengenpurezento.mp4"
      width="100%"
      margin="auto"
    />
    </a>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しています</p>
    <br />
  </div>





  <div className='normal-text'>
  
  <div className="normal-text" id="below_anquiet">
  </div>
    

    <video
      autoPlay
      loop
      muted
      playsInline
      src="kyukyokunoyasetaishitsuhe\kyukyokunoyasetaishitsuhe.mp4"
      width="100%"
      margin="auto"
    />
    <p className="chusyaku">※コース終了後1kg以上体重増加が見られなかった割合が94％ということ</p>
    <p className="chusyaku">※効果には個人差があります※画像はイメージです</p>
    <br />
    <div className="point-box">POINT👇</div>
    <div
      className="box-design3"
      style={{
        paddingLeft: "10px",
        textAlign: "left",
      }}>
      <p
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "20px",
          margin:"5px"
        }}>
        韓国アイドルもやってる
      </p>
      <p
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "20px",
          margin:"5px"
        }}>
        医療ダイエットがスゴすぎる・・
      </p>
    </div>
    <br />

    <p style={{marginBottom:"auto"}}>
      何回もダイエット諦めてた人
    </p>
    <p style={{color:"rgb(230, 0, 0)", fontSize:"30px"}}>絶対見て！</p>
    <br />
    <p className="normal-text">
      <span
        style={{
          backgroundColor: "transparent",
          color: "black",
        }}>
        肥満の原因を
      </span>
      <span
        className="highlighing-yellow"
        style={{
          color: "rgb(230, 0, 0)",
        }}>
        根こそぎ破壊
      </span>
      <span>し</span>
    </p>
    <br />
    <p
      className="highlighing-yellow"
      style={{
        color: 'rgb(230, 0, 0)',
        fontSize: "40px",
      }}>
      寝ながら
    </p>
    <br />
    <p
      className="highlighing-yellow"
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "40px",
        marginTop:"6px"
      }}>
      たった数か月で
    </p>
    <br />
    <br />
    <p>
      マイナス15キロ痩せ
      <span
        style={{
          fontSize: "10px",
        }}>
        ※
      </span>
      も目指せる
    </p>
    <p className="chusyaku">※効果には個人差があります</p>
    <p
      style={{
        color: "blue",
        fontSize: "10px",
      }}>
      通常、月々4万以上する
    </p>
    <p>医療ダイエットですが</p>
    <img loading="lazy" decoding="async"
      className="FV"
      src="kyukyokunoyasetaishituhe.png"
    />
    <p className="chusyaku">※コース終了後1kg以上体重増加が見られなかった割合が94％ということ</p>
    <p className="chusyaku">※効果には個人差があります※画像はイメージです</p>
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>現在、ウララクリニックでは</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>ダイエットデータ収集のため</p>
    <p>特別モニターを募集中！</p>
    <br />
    <p>
      上記アンケート回答の
      <span
        style={{
          color: "rgb(230, 0, 0)",
        }}>
        お礼に
      </span>
    </p>
    <p>医療ダイエット15か月分を</p>
    <br />
    <p
      className="yellow2"
      style={{
        color: "#EC008C",
        fontSize: "40px",
      }}>
      0円でご提供！
      <span
        style={{
          fontSize: "20px",
        }}>
        ※
      </span>
    </p>
    <br />
    <a href="https://freestyle-ts.com/link.php?i=pi8doylelazb&m=mi8dp1646fow">
    <video
      autoPlay
      loop
      muted
      playsInline
      src="kousikibana2.mp4"
      width="100%"
    />
    </a>
        <p className="chusyaku">
      ※当社指定の信販会社をご利用した分割料金※他キャンペーンとの併用不可
    </p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しております</p>
    <br />
    <br />
    <p
      style={{
        fontSize: "40px",
      }}>
      さ・ら・に！
    </p>
    <p
      style={{
        color: "gray",
        fontSize: "20px",
      }}>
      \お店の実績作りのために/
    </p>
    <p>減量1キロにつき</p>
    <p
      className="highlighing-yellow"
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "40px",
      }}>
      1万円プレゼント！
      <span
        style={{
          fontSize: "20px",
        }}>
        ※
      </span>
    </p>
    <br />
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="Genryo1kironitsuki/Genryo1kironitsuki.mp4"
      width="100%">
      お使いのブラウザは video タグに対応していません。
    </video>
    <p className="chusyaku">※他キャンペーンとの併用不可</p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しております</p>
    <p className="chusyaku">※コース終了後1kg以上体重増加が見られなかった割合が94％ということ
    </p>
    <br />
    <br />
    <p>頑張ってダイエットしていただいた方に！</p>
    <p>痩せた分だけお金を</p>
    <p>プレゼントしちゃいます💛</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="Yasetabundake\Yasetabundake.mp4"
      width="100%">
      お使いのブラウザは video タグに対応していません。
    </video>
    <br />
    <p className="chusyaku">※他キャンペーンとの併用不可</p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しております</p>
    <p>・</p>
    <p>・</p>
    <p>・</p>
    <img loading="lazy" decoding="async" className="FV" src="nankaayashikunai2.jpg" />
    <p>と思った方！</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="wait_a_minute\WaitAMinite.mp4"
      width="100%"
    />
    <br />
    <br />
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="korenihatyanto.mp4"
      width="100%"
    />
    <br />
    <br />
    <p className="small-text">実は現在、ウララクリニックは</p>
    <p>新店舗を開設したばかり</p>
    <p className="small-text">宣伝実績が</p>
    <p className="small-text">足りていない状況なんです...</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="shintenpowokaitenshitabakari.mp4"
      width="100%">
      お使いのブラウザは video タグに対応していません。
    </video>
    <br />
    <br />
    <p>そこで！</p>
    <p
      style={{
        fontWeight: "500",
      }}>
      モニター実績を増やし
    </p>
    <p
      style={{
        fontWeight: "500",
      }}>
      集客をより円滑にするために
    </p>
    <p>様々な特典をご用意！</p>
    <br />
    <img loading="lazy" decoding="async" className="FV" src="samazamana.png" />
    <p className="chusyaku">
      ※当社指定の信販会社をご利用した分割料金※他キャンペーンとの併用不可
    </p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しております</p>
    <br />
    <br />
    <p>だから</p>
    <p>無理な勧誘とか</p>
    <p>よくある後出しでの追加料金とかも</p>
    <p>一切ナシ！</p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="murinakanyu.mp4"
      width="100%">
      お使いのブラウザは video タグに対応していません。
    </video>
    <br />
    <br />
    <br />
    <p>もちろん！</p>
    <p>モニターさまも普通のお客様同様</p>
    <p>下記のメニューが</p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="menucaruseru.mp4"
      width="100%">
      お使いのブラウザは video タグに対応していません。
    </video>
    <br />
    <br />
    <pr>ちゃ～んと全て受けれちゃいます！</pr>
    <br />
    <br />
    <p
      style={{
        fontWeight: "500",
      }}>
      さらに
    </p>
    <img loading="lazy" decoding="async" className="FV" src="iekaratookute.jpg" />
    <p>という人のために！</p>
    <br />
    <p style={{fontSize:"19px",fontWeight:"400",lineHeight:"34.2px",margin:"auto"}}>このページから予約した方には</p>
    
    <p style={{fontSize:"19px",fontWeight:"400",lineHeight:"34.2px",margin:"auto"}}>交通費として</p>
    <p style={{fontSize:"19px",fontWeight:"400",lineHeight:"34.2px",margin:"auto"}}>アマゾンギフト</p>
    <p>5000円分もプレゼント！</p>
    <img loading="lazy" decoding="async" className="FV" src="amazongift.jpg" style={{marginTop:"3px"}} />
    <p className="chusyaku">
      ※この画面のスクリーンショットを撮り、カウンセリング時にカウンセラーにご提示ください。
      <br />
      <span>交通費としてamazonギフト券をお渡しします。</span>
      受付での提示やカウンセリング後の提示は対象外となります。
    </p>
    <p className="chusyaku">※一週間以内に来院された方のみ対象</p>
    <p className="chusyaku" />
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}    >お店から遠くて来れないよ～💦って人も</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}    >これで安心！💚♬</p>
    <br />
    <br />
    <p>ただ1点だけ注意いただきたい点が・・・</p>
    <p>この15か月分0円<span style={{fontSize:"10px",fontWeight:"400"}}>※</span></p>
    <p>減量1キロにつき1万円プレゼント<span style={{fontSize:"10px",fontWeight:"400"}}>※</span></p>
    <p style={{fontSize:"18px",fontWeight:"400"}}    >キャンペーンは</p>
    <p>
      さすがに
      <span
        style={{
          color: "rgb(230, 0, 0)",
          fontSize:"28px"
        }}>
        赤字覚悟
      </span>
      ...！
    </p>
    <p className="chusyaku">※当社指定の信販会社をご利用した分割料金※他キャンペーンとの併用不可</p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しています</p>
    <br />
    <p
      className="highlighing-yellow"
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "50px",
      }}>
      先着5名限定
      <span
        style={{
          fontSize: "20px",
        }}>
        ※
      </span>
    </p>
    <p>とさせていただきます...</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="sentyaku5meigentei.mp4"
      width="100%"
    />
    <p className="chusyaku">※全医院1日あたり</p>
    <br />
    <br />
    <p>現在の予約枠は、残りあと</p>
    <p style={{
          color: "rgb(230, 0, 0)",
          fontSize:"28px"
        }}>2名</p>
    <p
      style={{
        fontWeight: "500",
      }}>
      となっておりますので
    </p>
    <br />
    <p />
    <p
      style={{
        fontWeight: "500",
      }}>
      お得に医療ダイエットを受けたいなら
    </p>
    <p />
    <p>下記ボタンから</p>
    <p>予約していただくようお願いします!</p>
    <br />
    <a href="https://freestyle-ts.com/link.php?i=pi8doylelazb&m=mi8dp1646fow">
    <video autoPlay loop muted playsInline src="rittaibotan.webm" width={"100%"}>
      お使いのブラウザは video タグに対応していません。
    </video>
    </a>
    <p className="chusyaku">
      ※当社指定の信販会社をご利用した分割料金※他キャンペーンとの併用不可
    </p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しております</p>
    <br />
    <br />
    <div className="point-box">POINT👇</div>
    <div
      className="box-design3"
      style={{
        paddingLeft: "10px",
        textAlign: "left",
      }}>
      <p
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "20px",
          margin:"5px"
        }}>
        ダイエット＝頑張るは時代遅れ！
      </p>
      <p
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "20px",
          margin:"5px"
        }}>
        驚きの寝てるだけダイエットがスゴい！
      </p>
    </div>
    <br />
    <p>私、ダイエット</p>
    <p>
      <span
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "30px",
        }}>
        すご～～く頑張ってる
      </span>
      のに
    </p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="tsuraiundo.mp4"
      width="100%">
      お使いのブラウザは video タグに対応していません。
    </video>
    <br />
    <br />
    <p>
      <span
        style={{
          color: "rgb(88, 41, 240)",
          fontSize: "70px",
        }}></span>
    </p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="nandezenzenyasenaino.mp4"
      width="100%">
      {" "}
    </video>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="zenzenyasenai.mp4"
      width="100%"></video>
    <br />
    <br />
    <p>飲み会断りすぎて</p>
    <p>誘われなくなったし...</p>
    <video
      autoPlay
      muted
      playsInline
      src="Drinking/Drinking.mp4"
      width="100%"></video>
    <br />
    <br />
    <p
      style={{
        color: "blue",
      }}>
      おいしいもの我慢し続けて
    </p>
    <p>パッサパサの鶏肉しか</p>
    <p>食べてなかったのに</p>
    <br />
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="Sosyoku/Sosyoku.mp4"
      width="100%"></video>
    <br />
    <br />
    <br />
    <p>それでもぜんっぜ～～ん</p>
    <p>痩せないんだけど！！</p>
    <br />
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="Ganbatterunoni/Ganbatterunoni.mp4"
      width="100%"></video>
    <br />
    <br />
    <p className="small-text">もう私</p>
    <p
      style={{
        color: "rgb(230, 0, 0)",
      }}>
      一生ダイエット卒業できないのかも...
    </p>
    <br />
    <p>って諦めちゃってる人！</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="wait_a_minute\WaitAMinite.mp4"
      width="100%"
    />
    <br />
    <br />
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      実は、もう
    </p>
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      キツイいダイエット
    </p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="issyouyaranakutemoiikamo.mp4"
      width="100%"
    />
    <br />
    <br />
    <p>
      <span
        style={{
          color: "#EC008C",
        }}>
        URARAクリニックの医療ダイエット
      </span>
      <span>なら</span>
    </p>
    <br />
    <p className="normal-text">
      <span
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "28px",
        }}>
        リバウンドほとんどしない
      </span>
      <br />
      <span
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "25px",
        }}>
        『カリカリの港区女子体型』
      </span>
      <span
        style={{
          backgroundColor: "transparent",
          color: "black",
        }}>
        を
      </span>
    </p>
    <p>寝ながら手に入れて</p>
    <br />
    <p
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "25px",
      }}>
      好きなものを爆食いしてるのに
    </p>
    <p>リバウンドぜんっぜんしない</p>
    <p>勝ち組体型に生まれ変わりも</p>
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      目指せるんです！
    </p>
    <br />
    <img loading="lazy" decoding="async" className="FV" src="karikarinominatokujoshi.png" />
    <p className="chusyaku">※画像はイメージです</p>
    <br />
    <br />

    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      今までのダイエットで
    </p>
    <p>
      全然だめだった人こそ
      <span
        style={{
          color: "rgb(230, 0, 0)",
        }}>
        逆に！
      </span>
    </p>
    <p
      style={{
        color: "#EC008C",
      }}>
      医療ダイエット
      <span
        style={{
          color: "black",
        }}>
        は
      </span>
    </p>
    <p
      style={{
        textDecorationColor: "rgb(230, 0, 0)",
        textDecorationLine: "underline",
      }}>
      おすすめできるんです！
    </p>
    <br />
    <div className="point-box">POINT👇</div>
    <div
      className="box-design3"
      style={{
        paddingLeft: "40px",
        textAlign: "left",
      }}>
      <p
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "20px",
        }}>
        衝撃！
      </p>
      <p
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "20px",
          margin:"10px"
        }}>
        肥満の本当の原因は”アレ”だった..
      </p>
    </div>
    <img loading="lazy" decoding="async" className="FV" src="himannogeninhaumaretsukinotaishitsu.jpg" />
    <br />
    <br />
    <br />
    <p>実は私達が太る原因は</p>
    <p />
    <p
      className="highlighing-yellow"
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "30px",
      }}>
      脂肪細胞
    </p>
    <p>という細胞にあったんです！</p>
    <img loading="lazy" decoding="async" className="FV" src="ishiintabyu.png" />
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="Himannogeninhashibousaibou/Himannogeninhashibousaibou.mp4"
      width="100%"
    />
    <br />
    <br />
    <p>私たちがモノを食べると</p>
    <p
      style={{
        textDecorationColor: "rgb(230, 0, 0)",
        textDecorationLine: "underline",
      }}>
      脂肪細胞に栄養が蓄えられ
    </p>
    <p
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "24px",
        marginTop: "40px",
      }}>
      脂肪細胞がドンドン膨張！
    </p>
    <br />
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>体型がどんどん膨らんでしまうんです...</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="Shibousaibougadondonboucho/Shibousaibougadondonboucho.mp4"
      width="100%"
    />
    <br />
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>でも、既存のダイエットでは</p>
    <p
      style={{
        textDecorationColor: "rgb(230, 0, 0)",
        textDecorationLine: "underline",
      }}>
      どれだけ頑張っても
    </p>
    <p>脂肪細胞を取り除くことは</p>
    <p
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "30px",
      }}>
      不可能
    </p>
    <br />
    <img loading="lazy" decoding="async"
      className="FV"
      src="hutsunodaiettodato.jpg"
    />
    <br />
    <br />
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      だから運動をして
    </p>
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      一瞬痩せても
    </p>
    <p>ちょっと食べただけで</p>
    <p
      style={{
        color: "blue",
      }}>
      速攻でリバウンド
    </p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="rebound_again/rebound_again.mp4"
      width="100%"
    />
    <br />
    <br />
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      逆に言うと
    </p>
    <p>脂肪細胞自体を</p>
    <p>取り除くことさえできれば</p>
    <br />
    <p>どれだけ爆食いしても</p>
    <p>リバウンドほとんどしない</p>
    <p
      className="highlighing-yellow"
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "30px",
      }}>
      究極の痩せ体質
    </p>
    <br />
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      を目指せるんです！
    </p>
    <br />
    <br />
    <p>そんな都合のいい方法</p>
    <p>本当にあるんですか？</p>
    <p
      style={{
        fontSize: "50px",
        fontWeight: "400",
      }}>
      とお思いの方
    </p>
    <br />
    <br />
    <p>実は肥満細胞を減らしてしまう</p>
    <p>とってもいい方法があるんです..！</p>
    <br />
    <video autoPlay loop muted playsInline src="yajirushi.mp4" width="100%" />
    <br />
    <p>その名も</p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="Fire/Fire.mp4"
      style={{
        marginBottom: "20px",
      }}
      width="100%"
    />
    <p>実は医療ダイエットは</p>
    <p>肥満になる原因である</p>
    <p>
      <span
        style={{
          color: "rgb(230, 0, 0)",
        }}>
        脂肪細胞そのもの
      </span>
      を
    </p>
    <br />
    <p>寝ながら</p>
    <p>激しい運動</p>
    <p>過度な食事制限</p>
    <p>一切せずに</p>
    <p
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "40px",
      }}>
      速攻で破壊
    </p>
    <p style={{fontSize:"18px",fontWeight:"400"}}    >しちゃうんです！</p>

    <video
      autoPlay
      loop
      muted
      playsInline
      src="Shibousaibouwomarugotohakai\Shibousaibouwomarugotohakai.mp4"
      width="100%"
    />
    <br />
    <br />
    <br />
    <p>
      特に
      <span
        style={{
          color: "#EC008C",
        }}>
        ウララクリニック
      </span>
      の医療ダイエットは
    </p>
    <p>
      <span
        style={{
          color: "rgb(230, 0, 0)",
        }}>
        次世代医療機器
      </span>
      を豊富に使い
    </p>
    <p>個人にカスタマイズした</p>
    <p>施術を行います！💛</p>
    <p
      style={{
        fontSize: "18px",
        fontWeight: "400",
      }}>
      👇はその例💓
    </p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="menucaruseru.mp4"
      width="100%"></video>
    <br />
    <br />
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      だから
    </p>
    <p
      style={{
        color: "rgb(242, 104, 221)",
      }}>
      3食しっかり食べながら
    </p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="Tabetemotabetemo/Tabetemotabetemo.mp4"
      width="100%"
    />
    <br />
    <br />
    <br />
    <p>
      <span
        style={{
          color: "blue",
        }}>
        キツい運動
      </span>
      は全然してないのに！
    </p>
    <img loading="lazy" decoding="async"
      className="FV"
      src="HardActionNot/HardActionNot.png"
    />
    <br />
    <br />
    <video autoPlay loop muted playsInline src="yajirushi.mp4" width="100%" />
    <br />
    <br />
    <br />
    <p>今までダイエット失敗してきた人でも</p>
    <p>
      寝ながら
      <span
        style={{
          color: "#EC008C",
        }}>
        楽々マイナス15キロ痩せ
      </span>
      も
    </p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>目指せちゃうんです！</p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="Neterudakedemainasu/Neterudakedemainasu.mp4"
      width="100%"
    />
    <p className="chusyaku">※効果には個人差があります</p>
    <br />
    <br />
    <p  style={{fontSize:"18px",fontWeight:"400"}}>しかも</p>
    <p>肥満の原因自体を</p>
    <p><span style={{fontSize:"25px",color: "rgb(230, 0, 0)"}}>物理的に取り除く</span><span style={{fontSize:"14px",fontWeight:"400"}}>から</span></p>
    <p>リバウンドほとんどしない</p>
    <p>痩せ体質に！</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="slim_woman/slim_woman.mp4"
      width="100%"
    />
    <p className="chusyaku">※効果には個人差があります※画像はイメージです</p>
    <br />
    <br />
    <p>データでも</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>ウララの医療ダイエットを受けた人は</p>
    <p>
      リバウンド
      <span
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "30px",
        }}>
        94%
      </span>
      しないことが
    </p>
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      示されてて
    </p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="NotReboundRatio/NotReboundRatio.mp4"
      width="100%"
    />
    <br />
    <p className="chusyaku">※コース終了後1kg以上体重増加が見られなかった割合が94％ということ</p>
    <p className="chusyaku">※効果には個人差があります</p>
    <br />
    <p
      style={{
        color: "#EC008C",
        fontSize: "30px",
      }}>
      リバウンドほとんどしない
    </p>
    <p>痩せ体質を</p>
    <p style={{
        textDecorationColor: "rgb(230, 0, 0)",
        textDecorationLine: "underline",
      }}>本当に目指せちゃいます！</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="kyukyokunoyasetaishitsuhe\kyukyokunoyasetaishitsuhe.mp4"
      width="100%"
    />
    <br />
    <p className="chusyaku">※コース終了後1kg以上体重増加が見られなかった割合が94％ということ</p>
    <p className="chusyaku">※効果には個人差があります※画像はイメージです</p>
    <p className="chusyaku"></p>
    <br />
    <br />
    <p>実際、たった数か月寝ながら</p>
    <p>医療ダイエットを受けただけで</p>
    <p
      style={{
        color: "#EC008C",
        fontSize: "25px",
      }}>
      15キロ以上痩せた方が続出！
    </p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="BAkaruseru/BAkaruseru.mp4"
      width="100%"
    />
    <p className="chusyaku">※効果には個人差があります</p>

    <br />
    <br />
    <img loading="lazy" decoding="async" className="FV" src="watashidemodekisou.jpg" />
    <br />
    <br />
    <p>そうでしょ？（笑）</p>
    <br />
    <p
      style={{
        fontWeight: "400",
      }}>
      でも医療ダイエットの本当の価値は
    </p>
    <p
      style={{
        color: "#ff2243",
        fontSize: "30px",
      }}>
      そこだけじゃないんです
    </p>
    <br />
    <p
      style={{
        fontWeight: "400",
      }}>
      実は医療ダイエットは、
    </p>
    <p>ただ痩せるだけじゃない</p>
    <p>モデル並みのうつくしい体型</p>
    <p
      style={{
        fontWeight: "400",
      }}>
      も目指せる
    </p>
    <p
      style={{
        color: "#EC008C",
        fontSize: "35px",
      }}>
      「カラダの美容整形」
    </p>
    <p
      style={{
        fontWeight: "400",
      }}>
      なんです！
    </p>
    <div className="point-box">POINT👇</div>
    <div
      className="box-design3"
      style={{
        paddingLeft: "40px",
        textAlign: "left",
      }}>
      <p
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "20px",
        }}>
        韓国アイドル大注目！
      </p>
      <p
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "20px",
        }}>
        港区女子の爆美女スタイルの秘密
      </p>
    </div>
    <img loading="lazy" decoding="async" className="FV" src="munedakenokoshitaijigenno.jpg" />
    <p className="chusyaku">※画像はイメージです※効果には個人差があります</p>
    <br />
    <br />
    <p>医療ダイエットの最大の特徴は</p>
    <p
      style={{
        fontWeight: "400",
      }}>
      普通のダイエットと違って
    </p>
    <p style={{
        textDecorationColor: "rgb(230, 0, 0)",
        textDecorationLine: "underline",
        textDecorationThickness:"5px"
      }}>部位を選んで痩せることも</p>
    <p>可能なんです！</p>
    <br />
    <br />
    <p
      style={{
        fontWeight: "400",
      }}>
      従来のダイエットは
    </p>
    <p
      style={{
        fontWeight: "400",
      }}>
      お腹をへこませたら
    </p>
    <p>胸まで同時にへこんでしまう</p>
    <p
      style={{
        fontWeight: "400",
      }}>
      ことが一般的
    </p>
    <br />
    <img loading="lazy" decoding="async" className="FV" src="jurainodaietto.jpg" />
    <br />
    <br />
    <p>しかし！</p>
    <p>次世代技術を駆使した</p>
    <p>医療ダイエットなら</p>
    <p>どこの脂肪を減らすかを選べるから</p>
    <p>胸だけを残した部分痩せも可能！</p>
    <br />
    <img loading="lazy" decoding="async" className="FV" src="korekaranodaietto.jpg" />
    <p className="chusyaku">※画像はイメージです</p>

    <br />
    <br />
    <p>だから</p>
    <p>韓国アイドル並みの</p>
    <p>異次元のスタイルも目指せるんです・・！</p>
    <br />
    <img loading="lazy" decoding="async" className="FV" src="kanryuaidorunami.png" />
    <p className="chusyaku">※画像はイメージです</p>
    <br />
    <br />
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      実際
    </p>
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      お隣韓国のアイドルは
    </p>
    <p>胸は大きいのに</p>
    <p>足、腰、顔の脂肪がほとんどない</p>
    <p>お人形さん体型ですよね？</p>
    <br />
    <br />
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      実はあのスタイルも
    </p>
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      医療ダイエットでできていると
    </p>
    <p
      style={{
        fontSize: "18px",
        
        textDecorationColor: "rgb(248, 255, 34)",
        textDecorationLine: "underline",
        textDecorationThickness:"3px"
      }}>
      関係者の間では周知の事実
    </p>
    <br />
    <img loading="lazy" decoding="async"
      className="FV"
      src="kankokuaidorunosutairuha.jpg"
    />
    <p className="chusyaku">※画像はイメージです※効果には個人差があります</p>
    <br />
    <br />
    <p>特にウララクリニックの医療ダイエットは</p>
    <p>カウンセラーが一人一人の体質を徹底調査</p>
    <p>その人にマッチした</p>
    <p>痩せ方を提案してくれるから</p>
    <p>レベルが高いと大好評</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="daikohyo.mp4"
      width="100%"
    />    <p className="chusyaku">※画像はイメージです※効果には個人差があります</p>
    <br />
    <br />
    <p>骨格や年齢に合わせて</p>
    <p>綺麗に痩せることを目指した</p>
    <p>完全個別のプログラムになってるんです！</p>
    <br />
    <br />
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      だから
    </p>
    <p
      style={{
        fontSize: "20px",
        fontWeight: "400",
      }}>
      ダイエットあるあるの
    </p>
    <p
      style={{
        color: "blue",
      }}>
      ただ痩せてるだけの
    </p>
    <p
      style={{
        color: "blue",
      }}>
      寸動体型になる心配ナシ！
    </p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="iroke.mp4"
      width="100%"
    />
    <br />
    <p className="chusyaku">※画像はイメージです※効果には個人差があります</p>
    <br />
    <p>韓国アイドル並みの</p>
    <p>お色気たっぷりのボディを</p>
    <p>ラクラク目指せるから</p>
    <p>垢抜けを極めたい人から</p>
    <p
      className="highlighing-yellow"
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "30px",
      }}>
      人気爆発中！
    </p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="instagram/instagram_c2.mp4"
      width="100%"
    />
    <p className="chusyaku">※画像はイメージです※効果には個人差があります</p>
    <br />
    <p className="small-text">実際、港区のお姉さんが</p>
    <p className="small-text">続々とウララで医療ダイエットしちゃってます..</p>
    <img loading="lazy" decoding="async"
      className="FV"
      src="kyukyokunoyasetaishituhe.png"
    />
    <p className="chusyaku">※コース終了後1kg以上体重増加が見られなかった割合が94％ということ</p>
    <p className="chusyaku">※効果には個人差があります※画像はイメージです</p>
    <br />
    <p>でも医療ダイエットって</p>
    <p
      style={{
        fontWeight: "400",
      }}>
      ここだけの話
    </p>
    <p
      style={{
        fontWeight: "400",
      }}>
      価格がネックだった時期がありました・・
    </p>
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}
    >個別にプログラムを作り</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}
    >次世代医療機器を大量に使っていたので</p>
    <p>その相場はなんと</p>
    <p
      style={{
        color: "blue",
      }}>
      200万円以上！
    </p>
    
    <img loading="lazy" decoding="async" className="FV" src="souba200man.png" width="100%" />
    <br />
    <br />
    <p  style={{fontSize:"18px",fontWeight:"400"}}>事務所のアイドルがメインで使う</p>
    <p style={{
          color: "rgb(159, 159, 159)",
          fontSize: "18px",
        }}>知る人ぞ知るヤリ方だったんです...</p>
    <br />
    <p>しかし！</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>ウララクリニックは</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>新店舗を開設記念に</p>
    <p style={{
          color: "rgb(0, 203, 230)",
          fontSize: "20px",
        }}>特別価格でご案内中★</p>
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>3か月でマイナス15キロ痩せ目指せる</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>医療ダイエットを</p>
    <p style={{
          color: "rgb(230, 0, 0)",
          fontSize: "30px",
        }}>月々9,780円～<span style={{fontSize:"10px",fontWeight:"400"}}>※</span></p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>でご提供！</p>
    <br />
    <img loading="lazy" decoding="async" className="FV" src="kyougouhikaku.png" width="100%" />
    <p className="chusyaku">※効果には個人差があります</p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しています</p>
    <p className="chusyaku">※当社指定の信販会社をご利用した分割料金</p>
    <br />
    <br />
    <p>そのコスパの良さは</p>
    <p>他クリニックと比較しても</p>
    <p
      className="highlighing-yellow"
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "40px",
      }}>
      まさに圧倒的！
    </p>
    <br />
    <img loading="lazy" decoding="async" className="FV" src="attoutekikosupa.webp" width="100%" />
    <p className="chusyaku">※当社指定の信販会社をご利用した分割料金</p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しています</p>
    <br />
    <br />
    <p>それだけじゃありません！</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>現在、ウララクリニックでは</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>お店の実績を作るために</p>
    <p>モニターを募集中！</p>
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>先ほどアンケートを回答いただいた方に！</p>
    <p>ウララクリニックの医療ダイエットを</p>
    <p
      className="highlighing-yellow"
      style={{
        color: "rgb(230, 0, 0)",
        fontSize: "40px",
      }}>
      15か月分、0円
    </p>
    <br />
    <p>でご提供！</p>
    <a href="https://freestyle-ts.com/link.php?i=pi8doylelazb&m=mi8dp1646fow">
    <video
      autoPlay
      loop
      muted
      playsInline
      src="koushikibana.mp4"
      width="100%"
    />
    </a>
    <p className="chusyaku">※当社指定の信販会社をご利用した分割料金※他キャンペーンとの併用不可</p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しています
    </p>
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>もちろん、モニターですが</p>
    <p className="highlighing-pale-yellow">顔出しは一切ありませんので</p>
    <p>ご安心ください!</p>
    <br />
    <br />
    <p>専門医が</p>
    <p>一人一人のお客様に</p>
    <p>丁寧にご対応させていただきます♪💚</p>
    <br />
    <img loading="lazy" decoding="async" className="FV" src="kaunseringu.png" width="100%" />
    <br />
    <br />
    <p>これからの時代</p>
    <p>ダイエットは現代医学で</p>
    <p
      className="highlighing-pale-yellow"
      style={{
        fontSize: "40px",
        marginTop:"10px"
      }}>
      ✅楽に　
    </p>
    <br />
    <p
      className="highlighing-pale-yellow"
      style={{
        fontSize: "40px",
        marginTop:"5px"
      }}>
      ✅美しく
    </p>
    <br />
    <p
      className="highlighing-pale-yellow"
      style={{
        fontSize: "40px",
        marginTop:"5px"
      }}>
      ✅末永く
    </p>
    <br />
    <p>痩せるのが新常識</p>
    <br />
    <p
      style={{
        fontSize: "40px",
        fontWeight: "400",
      }}>
      <span
        style={{
          color: "#EC008C",
          fontWeight: "bold",
        }}>
        美容整形
      </span>
      と同じで
    </p>
    <p
      style={{
        fontSize: "17px",
        fontWeight: "400",
      }}>
      あか抜けている女性は
    </p>
    <p
      style={{
        fontSize: "17px",
        fontWeight: "400",
      }}>
      こっそりやってしまっている時代です..
    </p>
    <br />
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>今が<span
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "30px",
          fontWeight:"600"
        }}>
        本当にチャンス
      </span>だから</p>
    <p>ぜひ、<span
        style={{
          color: "rgb(239, 12, 232)",
          fontSize: "20px",
        }}>
        特別モニター価格
      </span>で</p>
    <p>受けてくださいね💛</p>
    <br />
    <a href="https://freestyle-ts.com/link.php?i=pi8doylelazb&m=mi8dp1646fow">
    <video autoPlay loop muted playsInline src="rittaibotan.webm" width="100%" />
    </a>
    <p className="chusyaku">※当社指定の信販会社をご利用した分割料金※他キャンペーンとの併用不可</p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しています
    </p>
    <br />
    <div className="point-box">POINT👇</div>
    <div
      className="box-design3"
      style={{
        paddingLeft: "40px",
        textAlign: "left",
      }}>
      <p
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "20px",
        }}>
        ここまで読んでくれたアナタに！
      </p>
      <p
        style={{
          color: "rgb(230, 0, 0)",
          fontSize: "20px",
        }}>
        ウララから特別オファー！💓
      </p>
    </div>
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>先ほどのアンケートに回答し</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>ご予約を取っていただいた方に対し</p>
    <p>モニター期間中に1キロ痩せるごとに</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>お礼に</p>
    <p style={{
          color: "rgb(230, 0, 0)",
          fontSize: "30px",
        }}>1万円をプレゼント！</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="Genryo1kironitsuki/Genryo1kironitsuki.mp4"
      width="100%"></video>
    <br />
    <p className="chusyaku">※コース終了後1kg以上体重増加が見られなかった割合が94％ということ</p>
    <p className="chusyaku">※他キャンペーンとの併用不可</p>
    <p className="chusyaku">※申し込みページ内に適用条件を記載しています。</p>
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>というのも</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>ウララクリニックでは現在</p>
    <p>新店舗を開店したばかりで</p>
    <p>ダイエット実績が不足してるんです・・</p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="shintenpowokaitenshitabakari.mp4"
      width="100%"
    />
    <br />
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>そこで</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>頑張って痩せていただいた方に対して</p>
    <p>お礼として減量1キロにつき</p>
    <p>１万円をプレゼントしちゃいます！</p>
    <br />
    <img loading="lazy" decoding="async" className="FV" src="1キロにつき1蔓延4.jpg" />
    <p className="chusyaku">※※申し込みページ内に適用条件を記載しています</p>
    <p className="chusyaku">※他キャンペーンとの併用不可</p>
    <br />
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>さらに</p>
    <p>５８キロ以上の女性に対して</p>
    <p>１０万円のギフトクーポンもプレゼント！</p>
    <br />
    <img loading="lazy" decoding="async" className="FV" src="10manenbun.jpg" />
    <p className="chusyaku">※総額料金からお値引きいたしますのでスタッフへお申し付けください</p>
    <p className="chusyaku">※男性は78㎏以上限定</p>
    <br />
    <br />
    <p>モノ凄い特典ですよね？！</p>
    <p>正直、医療ダイエットを受けるなら</p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="uraraittaku.mp4"
      width="100%"
      marginBottom="auto"
    />
    <p>と言っていいほどなんです</p>
    <br />
    <p
      style={{
        fontSize: "40px",
      }}>
      た・だ・し！
    </p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="emergency/emergency.mp4"
      width="100%"
    />
    <br />
    <br />
    <p>さすがにこのキャンペーンは</p>
    <p>お店の実績を集めるために</p>
    <video
      autoPlay
      loop
      muted
      playsInline
      src="akajikakugo.mp4"
      width="100%"
    />
    <br />
    <p>そのため</p>
    <p>先着5名限定</p>
    <p className="chusyaku">※全医院1日あたり</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>とさせていただき</p>
    <br />
    <p>予約枠が埋まり次第</p>
    <p>即終了</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>とさせていただきます</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="sentyaku5meigentei.mp4"
      width="100%"
    />
    <br />
    <br />
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>すでにアンケートに回答いただいた方は</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>すぐこちらのページから</p>
    <p>予約枠をゲットしちゃってください！</p>
    <a href="https://freestyle-ts.com/link.php?i=pi8doylelazb&m=mi8dp1646fow">
    <video autoPlay loop muted playsInline src="rittaibotan.webm" width="100%" />
    </a>
    <p className="chusyaku">※当社指定の信販会社をご利用した分割料金※申し込みページ内に適用条件を記載しています</p>
    <p className="chusyaku">※他キャンペーンとの併用不可</p>
    <br />
    <br />
    <p>ちなみに日程はいつでも変更可能！</p>
    <br />
    <video
      autoPlay
      loop
      muted
      playsInline
      src="henkoukanou.mp4"
      width="100%"
    />
    <br />
    <p style={{fontSize:"18px",fontWeight:"400"}}>予定が悪くなったら</p>
    <p>キャンセルも可能だから</p>
    <p>枠だけでも取っちゃってください</p>
    <br />
    <p style={{
          color: "rgb(230, 0, 0)",
          fontSize: "30px",
        }}>ただ1点だけお願いが...</p>
    <p style={{fontSize:"18px",fontWeight:"400"}}>予約後に無断キャンセルされた場合</p>
    <p>ペナルティとして</p>
    <p>今後上記特典を</p>
    <p>二度と受け取れない可能性がございます</p>
    <br />
    <img loading="lazy" decoding="async" className="FV" src="mudankyanseruha.jpg" />
    <br />
    <p>ご都合が合わなくなった際には</p>
    <p>必ずご連絡をお願いいたします！</p>
    <br />
    <a href="https://freestyle-ts.com/link.php?i=pi8doylelazb&m=mi8dp1646fow">
    <video autoPlay loop muted playsInline src="rittaibotan.webm" width="100%" />
    </a>
    <p className="chusyaku">※当社指定の信販会社をご利用した分割料金※申し込みページ内に適用条件を記載しています</p>
    <p className="chusyaku">※他キャンペーンとの併用不可</p>
    <br />
    <br />
    <p
    className="my-styled-text2">
    安全のため、以下に当てはまる方は。</p>
    <p className="my-styled-text2">サービスを提供できないことが多くございます</p>
    <p
    className="my-styled-text2">
    何卒ご留意ください。</p>
    <p>18歳未満75歳以上/BMIが18.5以下/がん/心疾患/肝疾患/腎疾患/妊娠中/授乳中/産後3ヶ月以内の方 </p>
    
  </div>
</div>
  )
}

export default App
