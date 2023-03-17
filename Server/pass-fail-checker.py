# import sys

# def check_pass_fail(score):
#   # threshold = 60
#   if score == "hello":
#     return 'Pass'
#   else:
#     return 'Fail'

# score = str(sys.argv[1])
# result = check_pass_fail(score)
# print(result)
# pip install -q openai
# !pip install -q git+https://github.com/openai/whisper.git
# pip install gTTS
import openai
import sys
#import whisper
#from gtts import gTTS
OPENAI_API_KEY = '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'
OPENAI_ORGANIZATION = 'org-4P9mIeJa0VtYXPSUA4VhMcDl'
openai.organization = OPENAI_ORGANIZATION
openai.api_key = OPENAI_API_KEY
#input voice returns list of voice to text result and chtgpt ouput text
def create(voice_input):

  # audio = whisper.load_audio(voice_input)
  #audio = whisper.pad_or_trim(voice_input)
  audio = voice_input
  result_text = audio
  response = openai.Completion.create(
      model = "text-davinci-003",
      prompt = result_text,
      max_tokens = 2000
  )
  output_text = response.choices[0].text

#   output_voice_obj = gTTS(text = output_text, lang = "en", slow = False)
#   output_voice_obj.save("output.mp3")

  return output_text
# audio = whisper.load_audio("download.mp3")
# audio ="Pretend you are a career advisor. Look at these 5 questions. 1. What kind of work do you enjoy doing the most? Option 1: Working with people Option 2: Working with data or technology Option 3: Working with your hands or in a physical job Option 4: Other 2. What are your top skills or strengths? Option 1: Leadership and management Option 2: Communication and collaboration Option 3: Analytical and problem-solving Option 4: Creative and innovative 3. What motivates you in your work? Option 1: Making a positive impact on people's lives Option 2: Challenging yourself to learn and grow Option 3: Earning a high salary or financial stability Option 4: Pursuing your passion or interests 4. What are your long-term career goals? Option 1: Climbing the corporate ladder and achieving a high-level management position Option 2: Starting your own business or becoming an entrepreneur Option 3: Pursuing a creative or artistic career Option 4: Other 5. What kind of company culture do you prefer? Option 1: Collaborative and team-oriented Option 2: Independent and autonomous Option 3: Formal and structured Option 4: Other  A user gave these answers 1. Option 1 2. Option 2 3. Option 3 4. Option 2 5. Option 1"
audio = str(sys.argv[1])
print(create(audio))
