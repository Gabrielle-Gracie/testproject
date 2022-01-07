class DashboardPage {

    userDashboard()
     {
       return cy.get('.DashboardHeader',{ timeout: 10000 })
     }

     userGameDashboard()
     {
       return cy.get('.DashboardHeader', { timeout: 5000 })
     }

     selectGame()
     {
       return cy.get("#root > div > div.dashboard-content > div.games-activity > div.games-tour-step.games-available > div > div:nth-child(1)")
     }

     games()
     {
       return cy.get('.games-activity')
     }

     createQuiz()
     {
       return cy.get('#root > div > div.dashboard-content > div.games-activity > div.games-tour-step.games-available > div > div:nth-child(1)')
     }

     leaderboardDetails()
     {
       return cy.get('.leaderboard')
     }

     extLeaderboardPage()
     {
       return cy.get('a.extended-leaders-button')
     }

     extLeaderboardDetails()
     {
       return cy.get('#root > div.ExtendedLeaderboard')
     }

    logout()
    {
       return cy.get('.sign-out > p')
    }
 
     
   
   }
   
   export default DashboardPage;
   