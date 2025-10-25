pipeline{
    agent any

    environment{
        VERCEL_TOKEN = credentials("vercel_token")
    }
    stages{
        stage('Install'){
            steps{
                bat 'npm install'
            }
        }
        stage('Test'){
            steps{
                echo 'No test are script found'
            }
        }
        stage('build'){
            steps{
                bat 'npm install build'
            }
        }
        stage('deploy'){
            steps{
                bat 'npx vercel --prod --yes --token=%VERCEL_TOKEN%'
            }
        }
    }
}
