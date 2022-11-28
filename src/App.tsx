import styles from './app.module.scss';

function App() {
	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				<div className={styles.date}>
					<h1>Sunday</h1>
					<h2>Nov 28, 2022</h2>
				</div>
				<div>
					<ul className={styles.tags}>
						<li><button>All</button></li>
						<li><button>Routine</button></li>
						<li><button>Coding</button></li>
						<li><button>Chore</button></li>
						<li><button>Etc</button></li>
					</ul>
				</div>
				<div>
					<ul className={styles.dayParts}>
						<li><button>All</button></li>
						<li><button>Morning</button></li>
						<li><button>Evening</button></li>
						<li><button>Night</button></li>
					</ul>
				</div>
				<div>
					<ul className={styles.todos}>
						<li>
							<label className={styles.label}>
								빨래하기
								<input type="checkbox" />
								<span className={styles.checkmark}></span>
							</label>
						</li>
						<li>
							<label className={styles.label}>
								알고리즘 1문제
								<input type="checkbox" />
								<span className={styles.checkmark}></span>
							</label>
						</li>
						<li>
							<label className={styles.label}>
								면접 질문 정리
								<input type="checkbox" />
								<span className={styles.checkmark}></span>
							</label>
						</li>
						<li>
							<label className={styles.label}>
								PT 1시간
								<input type="checkbox" />
								<span className={styles.checkmark}></span>
							</label>
						</li>
						<li>
							<label className={styles.label}>
								독서 30분 이상
								<input type="checkbox" />
								<span className={styles.checkmark}></span>
							</label>
						</li>
						<li>
							<label className={styles.label}>
								신분증 재발급 받기
								<input type="checkbox" />
								<span className={styles.checkmark}></span>
							</label>
						</li>
						<li>
							<label className={styles.label}>
								청소기 돌리기
								<input type="checkbox" />
								<span className={styles.checkmark}></span>
							</label>
						</li>
						<li>
							<label className={styles.label}>
								화분에 물주기
								<input type="checkbox" />
								<span className={styles.checkmark}></span>
							</label>
						</li>
						<li>
							<label className={styles.label}>
								영화 예매하기
								<input type="checkbox" />
								<span className={styles.checkmark}></span>
							</label>
						</li>
						<li>
							<label className={styles.label}>
								6시 전에 기상
								<input type="checkbox" />
								<span className={styles.checkmark}></span>
							</label>
						</li>
						<li>
							<label className={styles.label}>
								테스트 케이스 추가
								<input type="checkbox" />
								<span className={styles.checkmark}></span>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
