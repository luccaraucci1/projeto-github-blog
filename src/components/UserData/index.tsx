import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stat, UserDescription, UserInfo, UserStats, UserTitle } from "./styles";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";


interface UserData{
  name: string,
  company: string,
  followers: number,
  login: string,
  avatar_url: string,
  html_url: string,
  bio: string
}

export function UserData(){

  const [userData, setUserData] = useState<UserData>()


  const fetchData = useCallback(() => {
    axios.get('https://api.github.com/users/diego3g').then(
      response => {
        setUserData(response.data)
      }
    )
  },[])

  useEffect(() => {
    fetchData()
    
  }, [fetchData])

  console.log(userData)
  

  return(
    <UserInfo>
      <img src={userData?.avatar_url} />
        <div>
          <UserTitle>
            <h1>{userData?.name}</h1>
            <a href={userData?.html_url}>GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
            
          </UserTitle>
          <UserDescription>
            <p>{userData?.bio}</p>
          </UserDescription>

          <UserStats>
            <Stat>
              <FontAwesomeIcon icon={faGithub} /> 
              {userData?.login}
            </Stat>
            {userData?.company ? 
                <Stat>
                  <FontAwesomeIcon icon={faBuilding} /> 
                  {userData.company}
                </Stat> : null
            }
            
            <Stat>
              <FontAwesomeIcon icon={faUserGroup} /> 
              {userData?.followers} Seguidores
            </Stat>
          </UserStats>
        </div>
    </UserInfo>
  )
}