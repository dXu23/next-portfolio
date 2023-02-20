
const API_URL = 'https://leetcode.com/graphql';
const LEETCODE_USERNAME = 'bcImEvil';

export default function LeetCode({ data }: { data: any }) {
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
}

async function fetchAPI(query: string, variables = {}) {
    const res = await fetch('API_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
    });
    
    const json = await res.json()
    if (json.errors) {
        console.error(json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data
}

export async function getServerSideProps() {
    const data = await fetchAPI(`
        query userProblemsSolved($username: String!) {
            allQuestionsCount {
                difficulty
                count
            }
            matchedUser(username: $username) {
                problemsSolvedBeatsStats {
                    difficulty
                    percentage
                }
                submitStatsGlobal {
                    acSubmissionNum {
                        difficulty
                        count
                    }
                }
            }
        }    
    `, { username: LEETCODE_USERNAME });

    return {
        props: {
            data
        }
    };
}