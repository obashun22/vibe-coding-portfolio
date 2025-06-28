import { Github, ExternalLink, Mail, MapPin, Calendar, User, Code, Lightbulb, Coffee } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-16 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          
          <div className="relative">
            <div className="w-40 h-40 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <User className="w-20 h-20 text-white" />
            </div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3">
              大羽 俊輔
            </h1>
            <h2 className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-4">Shunsuke Oba</h2>
            <p className="text-2xl text-gray-700 dark:text-gray-200 font-light mb-6">
              フロントエンドエンジニア・大学院生
            </p>
            <div className="flex items-center justify-center gap-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>愛知県 名古屋市</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-purple-500" />
                <span>2000年生まれ</span>
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Coffee className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">自己紹介</h2>
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p className="text-lg">
              名古屋大学大学院情報学研究科に在籍する<strong className="text-blue-600 dark:text-blue-400">フロントエンドエンジニア</strong>です。
              ユーザーフレンドリーなWebアプリケーションやモバイルアプリの開発に情熱を注いでいます。
            </p>
            <p>
              「しょうもないものを創るのが好き」をモットーに、みんなが使ってくれそうなサービスを作ることを目指しています。
              プライベートでは温泉巡りとグルメ旅行を楽しんでいます。
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-white/20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">経歴・学歴</h2>
          </div>
          <div className="space-y-8 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
            
            <div className="relative flex items-start gap-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                2023
              </div>
              <div className="flex-1 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">名古屋大学大学院 情報学研究科</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">2023年 - 現在</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">コンピュータサイエンス専攻 修士課程</p>
              </div>
            </div>
            
            <div className="relative flex items-start gap-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                2022
              </div>
              <div className="flex-1 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">ソフトウェアエンジニア</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">CypeTechnology • 2022年</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Web開発・フロントエンド技術</p>
              </div>
            </div>
            
            <div className="relative flex items-start gap-6">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                2021
              </div>
              <div className="flex-1 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">ソフトウェアエンジニア</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Hashup • 2021年</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Webアプリケーション開発</p>
              </div>
            </div>
            
            <div className="relative flex items-start gap-6">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                2020
              </div>
              <div className="flex-1 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">名古屋大学 コンピュータ科学科</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">2020年 - 2023年</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">情報学部から転学科</p>
              </div>
            </div>
            
            <div className="relative flex items-start gap-6">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                2019
              </div>
              <div className="flex-1 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">名古屋大学 情報学部</h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">2019年 入学</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">大学での学習をスタート</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-8 border border-white/20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">主要プロジェクト</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 border border-yellow-200 dark:border-yellow-700/50 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">落単らくだ</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                名古屋大学生向けの落単情報共有サイト。React & Ruby on Railsで開発。
                学生の履修判断をサポートする実用的なWebサービス。
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-medium">JavaScript</span>
                  <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-medium">Rails</span>
                </div>
                <a href="https://rakutan-rakuda.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 border border-orange-200 dark:border-orange-700/50 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">つたん（英単語学習アプリ）</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                通知機能付きiOS英単語学習アプリ。Swift開発。
                効率的な単語学習をサポートするモバイルアプリケーション。
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full font-medium">Swift</span>
                <a href="https://github.com/obashun22/tsutan" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/10 dark:to-teal-900/10 border border-green-200 dark:border-green-700/50 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">あんこ（体温記録アプリ）</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                日々の体温を記録・管理するiOSアプリ。Swift開発。
                健康管理をサポートするシンプルな体温トラッキングアプリ。
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">Swift</span>
                <a href="https://github.com/obashun22/anco" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 border border-blue-200 dark:border-blue-700/50 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">新面ゲーム</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                顔のパーツを組み合わせて新しい顔を作るゲーム。Python開発。
                エンターテイメント要素のある楽しいWebアプリケーション。
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Python</span>
                <a href="https://github.com/obashun22/newface-game" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/10 dark:to-pink-900/10 border border-red-200 dark:border-red-700/50 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">マインスイーパー WebGL</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                Unity WebGLで作成したマインスイーパーゲーム。
                ブラウザで遊べるクラシックなパズルゲームの実装。
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-medium">Unity</span>
                  <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-medium">WebGL</span>
                </div>
                <a href="https://github.com/obashun22/minesweeper_webgl" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/10 dark:to-violet-900/10 border border-purple-200 dark:border-purple-700/50 rounded-xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">タイッター</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                わざとタイポしたツイートができるWebサービス。
                ユニークなアイデアで話題性のあるエンターテイメントサイト。
              </p>
              <div className="flex items-center justify-between">
                <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">Web</span>
                <a href="https://github.com/obashun22/tiwtter" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Links */}
        <section className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">お問い合わせ・SNS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a 
              href="https://github.com/obashun22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="font-medium">GitHub</span>
            </a>
            <a 
              href="https://twitter.com/obashun22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span className="font-medium">Twitter</span>
            </a>
            <a 
              href="https://obashun22.github.io/light-portfolio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="font-medium">旧ポートフォリオ</span>
            </a>
          </div>
          <div className="mt-8 text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200 dark:border-blue-700/50">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              お仕事の依頼やコラボレーションについてお気軽にお声がけください！
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
